import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ContactService } from "app/contact.service";

@Component({
  selector: "app-addaddress",
  templateUrl: "./addaddress.component.html",
  styleUrls: ["./addaddress.component.css"],
})
export class addAddressComponent implements OnInit {
  addForm: any;
  addressData: any;
  constructor(
    private frmbuilder: FormBuilder,
    private http: HttpClient,
    private CS: ContactService,
    @Inject(MAT_DIALOG_DATA) public data: { cid: string }
  ) {}

  addAddress(addForm) {
    this.CS.addAddress(this.data.cid,addForm).subscribe((res) => {
        alert("Adresse ajouté!");
      },
          (error) => {
            alert("a problem occured while adding the address to this contact.");

          }
        );
  }

  ngOnInit() {
    this.addForm = this.frmbuilder.group({
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zipCode: ["", Validators.required],
    });
  }
}