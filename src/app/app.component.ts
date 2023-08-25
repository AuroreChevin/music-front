import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Album } from './model/album.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'music';
  constructor(private apiService : ApiService){}
  ngOnInit(): void {
  }
}
