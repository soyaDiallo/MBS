import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSacComponent } from './list-sac.component';

describe('ListSacComponent', () => {
  let component: ListSacComponent;
  let fixture: ComponentFixture<ListSacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
