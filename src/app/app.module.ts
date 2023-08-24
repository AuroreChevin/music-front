import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AlbumsReducer } from './ngrx/albums.reducer';
import { AlbumsEffects } from './ngrx/albums.effects';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlbumsMusicNavbarComponent } from './components/albums/albums-music-navbar/albums-music-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    NotFoundComponent,
    AlbumsMusicNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({albumState : AlbumsReducer}),
    EffectsModule.forRoot([AlbumsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
