import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInformation3Component } from './business-information3.component';

describe('BusinessInformation3Component', () => {
  let component: BusinessInformation3Component;
  let fixture: ComponentFixture<BusinessInformation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessInformation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessInformation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
