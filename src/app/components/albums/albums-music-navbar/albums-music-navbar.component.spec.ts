import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlbumsMusicNavbarComponent } from './albums-music-navbar.component';
import { ApiService } from 'src/app/services/api.service';

describe('AlbumsMusicNavbarComponent', () => {
  let component: AlbumsMusicNavbarComponent;
  let fixture: ComponentFixture<AlbumsMusicNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsMusicNavbarComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ApiService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsMusicNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should have the correct title for musical genre', () => {
    const expectedHeadingTextMusical = 'Genres musicaux';
    const headingTextMusical = fixture.nativeElement.querySelector('h6').textContent;
    expect(headingTextMusical).toBe(expectedHeadingTextMusical);
  });
});
