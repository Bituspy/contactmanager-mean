import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ContactService } from "app/contact.service";

@Component({
  selector: "app-updatecontact",
  templateUrl: "./updatecontact.component.html",
  styleUrls: ["./updatecontact.component.css"],
})
export class updateContactComponent implements OnInit {
  editForm: any;
  contactData:any;
  constructor(
    private frmbuilder: FormBuilder,
    private http: HttpClient,
    private CS:ContactService,
    @Inject(MAT_DIALOG_DATA) public data: { cid: string } 
    /*
We used @Inject to get the injected Contact ID from ManageContacts component
to edit this specific contact
    */
  ) {}

  readContact(){
//read the contact that will be edited's data
     this.CS.readContact(this.data.cid).subscribe((res) => {
       this.contactData = res;
//read contact by id and fill the editForm values with the contact data.
       this.editForm.patchValue({
         name: {
           firstname: this.contactData.name.firstname,
           lastname: this.contactData.name.lastname,
         },
         email: this.contactData.email,
         phone: this.contactData.phone,
         typeContact: this.contactData.typeContact,
       });
     });
  }

  editContact(editForm) {
//call CS (ContactService) editContact function by 
// giving it the id and new contact data to update
 this.CS.editContact(this.data.cid,editForm).subscribe((res) => {
   alert("Modifié!");
 });
  }

  ngOnInit() {
//onInit read contact data and initliaze the editForm values
    this.readContact();
    this.editForm = this.frmbuilder.group({
      name: this.frmbuilder.group({
        firstname: ["", Validators.required],
        lastname: ["", Validators.required],
      }),
      email: ["", Validators.required],
      phone: ["", Validators.required],
      typeContact: ["", Validators.required],
    
    });
  }
}