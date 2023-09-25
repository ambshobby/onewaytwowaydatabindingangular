import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownautoupdateComponent } from './dropdownautoupdate.component';

describe('DropdownautoupdateComponent', () => {
  let component: DropdownautoupdateComponent;
  let fixture: ComponentFixture<DropdownautoupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownautoupdateComponent]
    });
    fixture = TestBed.createComponent(DropdownautoupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
