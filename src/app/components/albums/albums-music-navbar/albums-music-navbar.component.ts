import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Album } from 'src/app/model/album.model';
import { MusicalGenre } from 'src/app/model/musicalgenre.model';
import { GetAlbumsByIdMusicAction, GetAllAlbumsAction } from 'src/app/ngrx/albums.actions';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albums-music-navbar',
  templateUrl: './albums-music-navbar.component.html',
  styleUrls: ['./albums-music-navbar.component.css']
})
export class AlbumsMusicNavbarComponent implements OnInit {
  listAlbums$ : Observable<Album[]> | null =null;
  listMusicalGenres$ : Observable<MusicalGenre[]> | null =null;
  constructor(private apiService : ApiService, private store : Store<any>){
  }
  ngOnInit(): void {
    this.getListMusicalGenres();
  }
  getListAlbums(){
    this.store.dispatch(new GetAllAlbumsAction({}));
  }
  getListMusicalGenres(){
    this.listMusicalGenres$ = this.apiService.getAllMusicalGenres();
  }
  getAlbumsByMusic(id : number){
    this.store.dispatch(new GetAlbumsByIdMusicAction(id))
  }
}
