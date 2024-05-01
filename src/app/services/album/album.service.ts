import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Album } from '../../models/album.model';
import { MusicalGenre } from '../../models/musicalgenre.model';
import { Observable } from 'rxjs';
import { UrlUtils } from '../../common/urlUtil';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}
  urlAlbums : string = UrlUtils.albums;
  public getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.urlAlbums);
  }
  public getAllAlbumsPagination(page: number): Observable<any> {
    return this.http.get<Album[]>(
      this.urlAlbums+ '/paging?page=' + page
    );
  }
  public getAlbumsByMusiGenre(id: number): Observable<Album[]> {
    return this.http.get<Album[]>(
      this.urlAlbums + '/musical-genres/' + id
    );
  }
  public getAlbumsByBandName(keyword: string): Observable<Album[]> {
    return this.http.get<Album[]>(
      this.urlAlbums + '/band-names/keyword=' + keyword
    );
  }
  public postAlbumsPhoto(file: File, id: number): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(this.urlAlbums + '/photos/' + id, formData);
  }
}
