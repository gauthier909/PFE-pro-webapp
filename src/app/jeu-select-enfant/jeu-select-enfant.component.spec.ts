import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuSelectEnfantComponent } from './jeu-select-enfant.component';

describe('JeuSelectEnfantComponent', () => {
  let component: JeuSelectEnfantComponent;
  let fixture: ComponentFixture<JeuSelectEnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuSelectEnfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuSelectEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
