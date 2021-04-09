import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPieceComponent } from './detail-piece.component';

describe('DetailPieceComponent', () => {
  let component: DetailPieceComponent;
  let fixture: ComponentFixture<DetailPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
