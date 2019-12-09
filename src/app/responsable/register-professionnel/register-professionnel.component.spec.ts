import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProfessionnelComponent } from './register-professionnel.component';

describe('RegisterProfessionnelComponent', () => {
  let component: RegisterProfessionnelComponent;
  let fixture: ComponentFixture<RegisterProfessionnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProfessionnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
