import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMachineComponent } from './detail-machine.component';

describe('DetailMachineComponent', () => {
  let component: DetailMachineComponent;
  let fixture: ComponentFixture<DetailMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
