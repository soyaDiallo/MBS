import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListErreurComponent } from './list-erreur.component';

describe('ListErreurComponent', () => {
  let component: ListErreurComponent;
  let fixture: ComponentFixture<ListErreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListErreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
