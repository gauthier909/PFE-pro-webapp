import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionelleComponent } from './professionelle.component';

describe('ProfessionelleComponent', () => {
  let component: ProfessionelleComponent;
  let fixture: ComponentFixture<ProfessionelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
