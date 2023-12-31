import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';

const routes: Routes = [
  {path : 'albums', component : AlbumsComponent},
  {path : '', redirectTo : 'albums', pathMatch :'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
