import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSacComponent } from './new-sac.component';

describe('NewSacComponent', () => {
  let component: NewSacComponent;
  let fixture: ComponentFixture<NewSacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
