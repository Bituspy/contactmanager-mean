import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerComponent } from "./contactmanager.component";

describe('AdminLayoutComponent', () => {
  let component: ContactManagerComponent;
  let fixture: ComponentFixture<ContactManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactManagerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
