import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addContactComponent } from "./addcontact.component";

describe('addContactComponent', () => {
  let component: addContactComponent;
  let fixture: ComponentFixture<addContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addContactComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
