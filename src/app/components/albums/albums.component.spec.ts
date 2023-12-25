import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/api.service';
import { AlbumsComponent } from './albums.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore} from '@ngrx/store/testing';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';

/*describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule ],
      providers :[ApiService, provideMockStore(), FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  
});*/