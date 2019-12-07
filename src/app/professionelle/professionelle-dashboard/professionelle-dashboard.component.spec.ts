import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionelleDashboardComponent } from './professionelle-dashboard.component';

describe('ProfessionelleDashboardComponent', () => {
  let component: ProfessionelleDashboardComponent;
  let fixture: ComponentFixture<ProfessionelleDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionelleDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionelleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
