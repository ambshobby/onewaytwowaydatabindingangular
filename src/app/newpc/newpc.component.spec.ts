import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpcComponent } from './newpc.component';

describe('NewpcComponent', () => {
  let component: NewpcComponent;
  let fixture: ComponentFixture<NewpcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewpcComponent]
    });
    fixture = TestBed.createComponent(NewpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
