import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInformation2Component } from './business-information2.component';

describe('BusinessInformation2Component', () => {
  let component: BusinessInformation2Component;
  let fixture: ComponentFixture<BusinessInformation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessInformation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessInformation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
