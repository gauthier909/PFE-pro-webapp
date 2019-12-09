import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableRegisterComponent } from './responsable-register.component';

describe('ResponsableRegisterComponent', () => {
  let component: ResponsableRegisterComponent;
  let fixture: ComponentFixture<ResponsableRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsableRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
