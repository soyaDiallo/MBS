import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTransactionsComponent } from './site-transactions.component';

describe('SiteTransactionsComponent', () => {
  let component: SiteTransactionsComponent;
  let fixture: ComponentFixture<SiteTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
