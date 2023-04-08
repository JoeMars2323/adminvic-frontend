import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCrudComponent } from './film-crud.component';

describe('FilmCrudComponent', () => {
  let component: FilmCrudComponent;
  let fixture: ComponentFixture<FilmCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
