import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { updateAddressComponent } from "./updateaddress.component";

describe("updateAddressComponent", () => {
  let component: updateAddressComponent;
  let fixture: ComponentFixture<updateAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [updateAddressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(updateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
