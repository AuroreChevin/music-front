import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsMusicNavbarComponent } from './albums-music-navbar.component';

describe('AlbumsMusicNavbarComponent', () => {
  let component: AlbumsMusicNavbarComponent;
  let fixture: ComponentFixture<AlbumsMusicNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsMusicNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsMusicNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
