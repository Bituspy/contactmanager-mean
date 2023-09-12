import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ContactService } from "app/contact.service";

@Component({
  selector: "app-updateaddress",
  templateUrl: "./updateaddress.component.html",
  styleUrls: ["./updateaddress.component.css"],
})
export class updateAddressComponent implements OnInit {
  editForm: any;
  addressData: any;
  constructor(
    private frmbuilder: FormBuilder,
    private http: HttpClient,
    private CS: ContactService,
    @Inject(MAT_DIALOG_DATA) public data: { cid: string; aid: string }
  ) {}

  readAddress() {
    this.CS.readAddress(this.data.cid,this.data.aid).subscribe((res) => {
        this.addressData = res;
        this.editForm.patchValue({
          street: this.addressData.address.street,
          city: this.addressData.address.city,
          state: this.addressData.address.state,
          zipCode: this.addressData.address.zipCode,
        });
      });
  }

  editAddress(editForm) {
 this.CS.editAddress(this.data.cid,this.data.aid,editForm).subscribe((res) => {
        alert("Adresse Modifié!");
      },
          (error) => {
            alert("couldn't update this address");

          }
        );
  }

  ngOnInit() {
    this.readAddress();
    this.editForm = this.frmbuilder.group({
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zipCode: ["", Validators.required],
    });
  }
}