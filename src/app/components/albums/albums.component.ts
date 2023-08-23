import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Album } from 'src/app/model/album.model';
import { MusicalGenre } from 'src/app/model/musicalgenre.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  listAlbums : Album[] | undefined;
  listMusicalGenres : MusicalGenre[] | undefined;
  error : string | undefined;
  host : string="";
  editPhoto : boolean | undefined
  currentAlbum : any;
  currentFileUpload : any;
  selectedFile : any;

  constructor(private apiService : ApiService){

  }
  ngOnInit(): void {
    this.host =environment.host;
  this.getListAlbums();
  this.getListMusicalGenres();
  }
  getListAlbums(){
    this.apiService.getAllAlbums().subscribe({
      next : (data) => this.listAlbums = data,
      error : (err) => this.error = "problème",
      complete : () => this.error = "",
    });
  }
  getListMusicalGenres(){
    this.apiService.getAllMusicalGenres().subscribe({
      next : (data) => this.listMusicalGenres = data,
      error : (err) => this.error = "problème",
      complete : () => this.error = "",
    });
  }
  getAlbumsByMusic(id : number){
    this.apiService.getAlbumsByMusiGenre(id).subscribe({
      next : (data) => this.listAlbums = data,
      error : (err) => this.error = "problème",
      complete : () => this.error = "",
    });
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
