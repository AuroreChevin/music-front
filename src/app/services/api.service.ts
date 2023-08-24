import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Album } from '../model/album.model';
import { MusicalGenre } from '../model/musicalgenre.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  public getAllAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(environment.host+'/albums');
  }
  public getAllMusicalGenres() : Observable<MusicalGenre[]>{
    return this.http.get<MusicalGenre[]>(environment.host+'/musicalgenres');
  }
  public getAlbumsByMusiGenre(id : number): Observable<Album[]>{
    return this.http.get<Album[]>(environment.host+'/albums/musicalgenres/'+id);
  }
  public postAlbumsPhoto(file : File, id : number): Observable<any>{
    let formData : FormData= new FormData();
    formData.append('file', file);
    return this.http.post<any>(environment.host+'/photo/'+id, formData);
  }
}
