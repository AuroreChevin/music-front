import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Album } from 'src/app/model/album.model';
import { MusicalGenre } from 'src/app/model/musicalgenre.model';
import { GetAlbumsByIdMusicAction, GetAlbumsPaginationAction, GetAllAlbumsAction, SearchAlbumsByBandNameAction } from 'src/app/ngrx/albums.actions';
import { selectCountAlbums } from 'src/app/ngrx/albums.selectors';
import { AlbumsState, AlbumsStateEnum } from 'src/app/ngrx/albums.state';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  listAlbums : Album[] =[];
  listAlbumsState$ : Observable<AlbumsState> | null =null;
  albumsState$ : Observable<AlbumsState> | null =null;
  searchForm : FormGroup;
  searchError : string | undefined;
  countAlbums$ : Observable<number> | undefined;
  readonly albumsStateEnum = AlbumsStateEnum;
  listMusicalGenres$ : Observable<MusicalGenre[]> | null =null;
  error : string | undefined;
  host : string="";
  editPhoto : boolean | undefined
  currentAlbum : any;
  currentFileUpload : any;
  selectedFile : any;
  currentPage : number = 0;
  size : number =8;
  totalPages : number =0;
  pages : number[] = [];
  totalItems : number = 0;
  constructor(private apiService : ApiService, private store : Store<any>){
    this.searchForm = new FormGroup({
      keyword: new FormControl()
    })
    this.countAlbums$ = store.select(selectCountAlbums);
  }
  ngOnInit(): void {
    this.host =environment.host;
   this.listAlbumsState$ = this.store.pipe(
      map((state)=> state.albumState)
    );
  this.getListMusicalGenres();
  }
  getListAlbums(){
   this.store.dispatch(new GetAllAlbumsAction({}));
  }
  onPageChange(i : number): void {
    this.currentPage =i;
   this.getListAlbumsPagination();
  }
  getListAlbumsPagination(){
    /*this.apiService.getAllAlbumsPagination(this.currentPage).subscribe(
      data =>{this.listAlbums=data['content'];
      this.totalPages = data.totalPages;
      this.pages = new Array<number>(this.totalPages);
      console.log(this.listAlbums);
      console.log(this.totalPages);
      }
    )*/
    this.store.dispatch(new GetAlbumsPaginationAction(this.currentPage));

  }
  getListMusicalGenres(){
    this.listMusicalGenres$ = this.apiService.getAllMusicalGenres();
  }
  getAlbumsByMusic(id : number){
    this.store.dispatch(new GetAlbumsByIdMusicAction(id))
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
  onSearch(searchForm : FormGroup){
    if(searchForm.valid){
    this.store.dispatch(new SearchAlbumsByBandNameAction(searchForm.value.keyword));
    }
  }
  onPreviousPage(){

  }
  onNextPage(){

  }
}
