import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Album } from 'src/app/model/album.model';
import { MusicalGenre } from 'src/app/model/musicalgenre.model';
import { AlbumsState, AlbumsStateEnum } from 'src/app/ngrx/albums.state';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  listAlbums$ : Observable<Album[]> | null =null;
  listAlbumsState$ : Observable<AlbumsState> | null =null;
  readonly albumsStateEnum = AlbumsStateEnum;
  listMusicalGenres$ : Observable<MusicalGenre[]> | null =null;
  error : string | undefined;
  host : string="";
  editPhoto : boolean | undefined
  currentAlbum : any;
  currentFileUpload : any;
  selectedFile : any;

  constructor(private apiService : ApiService, private store : Store<any>){

  }
  ngOnInit(): void {
    this.host =environment.host;
    this.listAlbumsState$ = this.store.pipe(
      map((state)=> state.albumState)
    );
  this.getListMusicalGenres();
  }
  getListAlbums(){
    this.listAlbums$ = this.apiService.getAllAlbums();
  }
  getListMusicalGenres(){
    this.listMusicalGenres$ = this.apiService.getAllMusicalGenres();
  }
  getAlbumsByMusic(id : number){
    this.listAlbums$ = this.apiService.getAlbumsByMusiGenre(id);
  }
  onEditPhoto(album : Album){
    this.currentAlbum = album;
    this.editPhoto = true;
  }
  onSelectedFile(event:any){
    this.selectedFile= event.target.files;
  }
  onUploadPhoto(){
    this.currentFileUpload = this.selectedFile.item(0);
    this.apiService.postAlbumsPhoto(this.currentFileUpload,this.currentAlbum.id).subscribe({
      next : (data) => console.log(data),
      error : (err) => this.error = "problème",
      complete : () => this.error = "",
    })
  }
}
