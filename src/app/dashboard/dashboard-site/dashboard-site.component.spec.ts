import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSiteComponent } from './dashboard-site.component';

describe('DashboardSiteComponent', () => {
  let component: DashboardSiteComponent;
  let fixture: ComponentFixture<DashboardSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
