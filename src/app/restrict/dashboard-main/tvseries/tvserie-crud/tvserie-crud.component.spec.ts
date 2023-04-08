import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvserieCrudComponent } from './tvserie-crud.component';

describe('TvserieCrudComponent', () => {
  let component: TvserieCrudComponent;
  let fixture: ComponentFixture<TvserieCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvserieCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvserieCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
