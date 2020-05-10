import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardShowComponent } from './wizard-show.component';

describe('WizardShowComponent', () => {
  let component: WizardShowComponent;
  let fixture: ComponentFixture<WizardShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
