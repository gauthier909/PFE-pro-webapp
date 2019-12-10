import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPartieComponent } from './creation-partie.component';

describe('CreationPartieComponent', () => {
  let component: CreationPartieComponent;
  let fixture: ComponentFixture<CreationPartieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationPartieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationPartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
