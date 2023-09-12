import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatDialog } from '@angular/material/dialog';
import { updateContactComponent } from './updatecontact/updatecontact.component';
import { updateAddressComponent } from './updateaddress/updateaddress.component';
import { addAddressComponent } from './addaddress/addaddress.component';
import { ContactService } from "app/contact.service";
@Component({
  selector: "app-managecontacts",
  templateUrl: "./managecontacts.component.html",
  styleUrls: ["./managecontacts.component.css"],
})
export class ManageContactsComponent implements OnInit {
  contacts: any;
  addresses: any;
  constructor(
    private http: HttpClient, // httpClient is used to call the API
    public dialog: MatDialog,
    private CS: ContactService //create an instance of the contact service to call it
  ) {}

  //get contacts list from contact service
  getContacts() {
    this.CS.getContacts().subscribe(
      (data) => {
        this.contacts = data;
        console.log(data);
      },
      (error) => {
        console.log("Erreur");
      }
    );
  }

  //call getContacts on page load to get the list of contacts
  ngOnInit() {
    this.getContacts();
  }

  //delete a specific contact by entering its id in the parameters
  deleteContact(id) {
    this.CS.deleteContact(id).subscribe(
      (data) => {
        alert("contact deleted!");
        this.getContacts();
      },
      (error) => {
        console.log("Erreur");
      }
    );
  }

  //delete contact's specific address by giving both the contact's id and the address's id
  deleteAddress(cid, aid) {
    this.CS.deleteAddress(cid, aid).subscribe(
      (data) => {
        alert("address deleted!");
        this.getContacts();
      },
      (error) => {
        console.log("Erreur");
      }
    );
  }

//open contact update component in a dialog by giving the contact ID
  openEdit(id) {
    let dialogRef = this.dialog.open(updateContactComponent, {
      data: { cid: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getContacts();
    });
  }

/**open contact update component in a dialog by giving both
the contact's id and the address'id    **/

  openEditAddress(cid, aid) {
    let dialogRef = this.dialog.open(updateAddressComponent, {
      data: { cid: cid, aid: aid },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getContacts();
    });
  }

/* open add address component and send the contact's ID so it corresponds 
to the API's parameters */

  openAddAddress(id) {
    let dialogRef = this.dialog.open(addAddressComponent, {
      data: { cid: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getContacts();
    });
  }

//search in contacts list by firstName

  applyFilter(filterValue: string) {
    if (filterValue == "") {
      this.contacts = this.getContacts();
    } else {
      this.contacts = this.contacts.filter((e) =>
        e.name.firstname
          .toLowerCase()
          .includes(filterValue.trim().toLowerCase())
      );
    }
  }
}


