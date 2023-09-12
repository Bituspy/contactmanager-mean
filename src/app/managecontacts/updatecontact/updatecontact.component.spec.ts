import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { updateContactComponent } from "./updatecontact.component";

describe("updateContactComponent", () => {
  let component: updateContactComponent;
  let fixture: ComponentFixture<updateContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [updateContactComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(updateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
