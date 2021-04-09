import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSacComponent } from './detail-sac.component';

describe('DetailSacComponent', () => {
  let component: DetailSacComponent;
  let fixture: ComponentFixture<DetailSacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
