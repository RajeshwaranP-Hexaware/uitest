import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInformation1Component } from './business-information1.component';

describe('BusinessInformation1Component', () => {
  let component: BusinessInformation1Component;
  let fixture: ComponentFixture<BusinessInformation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessInformation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessInformation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
