import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { MusicalGenre } from 'src/app/models/musicalgenre.model';
import { GetAlbumsByIdMusicAction, GetAllAlbumsAction, SearchAlbumsByBandNameAction } from 'src/app/ngrx/albums.actions';
import { AlbumService } from 'src/app/services/album/album.service';
import { MusicalGenreService } from 'src/app/services/album/musical-genre/musical-genre.service';

@Component({
  selector: 'app-albums-music-navbar',
  templateUrl: './albums-music-navbar.component.html',
  styleUrls: ['./albums-music-navbar.component.css']
})
export class AlbumsMusicNavbarComponent implements OnInit {
  listAlbums$ : Observable<Album[]> | null =null;
  listMusicalGenres$ : Observable<MusicalGenre[]> | null =null;
  searchForm : FormGroup;
  searchError : string = '';
  constructor(private albumService : AlbumService, private musicalGenreService : MusicalGenreService, private store : Store<any>){
    this.searchForm = new FormGroup({
      keyword: new FormControl()
    })
  }
  ngOnInit(): void {
    this.getListMusicalGenres();
  }
  getListAlbums(){
    this.store.dispatch(new GetAllAlbumsAction({}));
  }
  getListMusicalGenres(){
    this.listMusicalGenres$ = this.musicalGenreService.getAllMusicalGenres();
  }
  getAlbumsByMusic(id : number){
    this.store.dispatch(new GetAlbumsByIdMusicAction(id))
  }
  onSearch(searchForm : FormGroup){
    if(searchForm.valid){
    this.store.dispatch(new SearchAlbumsByBandNameAction(searchForm.value.keyword));
    }
    
  }
}
