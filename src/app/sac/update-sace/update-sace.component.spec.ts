import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSaceComponent } from './update-sace.component';

describe('UpdateSaceComponent', () => {
  let component: UpdateSaceComponent;
  let fixture: ComponentFixture<UpdateSaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
