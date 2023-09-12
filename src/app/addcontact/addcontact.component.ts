import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from "app/contact.service";

@Component({
  selector: "app-addcontact",
  templateUrl: "./addcontact.component.html",
  styleUrls: ["./addcontact.component.css"],
})
export class addContactComponent implements OnInit {
  addForm: any;
  newContactData: any;
  constructor(
    private frmbuilder: FormBuilder,
    private http: HttpClient,
    private CS: ContactService
  ) {}

  addContact(addForm) {
    console.log(addForm);
    this.CS.addContact(addForm).subscribe(
      (res) => {
        this.newContactData = res;
        this.CS.addAddress(this.newContactData._id, addForm.address).subscribe(
          (res) => {
            alert("Contact added!");
          },
          (error) => {
            alert("contact added without an address");

          }
        );
      },
      (error) => {
        alert("an error occured while adding a contact");
      }
    );
  }

  ngOnInit() {
    this.addForm = this.frmbuilder.group({
      name: this.frmbuilder.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
      }),
      phone: ["", Validators.required],
      email: ["", Validators.required],
      typeContact: ["", Validators.required],
      address: this.frmbuilder.group({
        street: ["", Validators.required],
        city: ["", Validators.required],
        state: ["", Validators.required],
        zipCode: ["", Validators.required],
      }),
    });
  }
}
