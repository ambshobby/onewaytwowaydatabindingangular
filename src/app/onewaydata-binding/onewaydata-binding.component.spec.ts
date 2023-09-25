import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewaydataBindingComponent } from './onewaydata-binding.component';

describe('OnewaydataBindingComponent', () => {
  let component: OnewaydataBindingComponent;
  let fixture: ComponentFixture<OnewaydataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnewaydataBindingComponent]
    });
    fixture = TestBed.createComponent(OnewaydataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
