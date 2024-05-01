import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlUtils } from 'src/app/common/urlUtil';
import { MusicalGenre } from 'src/app/models/musicalgenre.model';

@Injectable({
  providedIn: 'root'
})
export class MusicalGenreService {
  urlMusicalGenres : string = UrlUtils.musicalGenres;
  constructor(private http: HttpClient) { }

  public getAllMusicalGenres(): Observable<MusicalGenre[]> {
    return this.http.get<MusicalGenre[]>(this.urlMusicalGenres);
  }
  
}
