import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addAddressComponent } from "./addaddress.component";

describe("updateAddressComponent", () => {
  let component: addAddressComponent;
  let fixture: ComponentFixture<addAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addAddressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
