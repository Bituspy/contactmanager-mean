import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as Chartist from 'chartist';
import { ContactService } from "app/contact.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  contacts: any;
  nbContacts: any;
  count = { Friend: 0, Family: 0, Work: 0 };
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private CS: ContactService
  ) {}

  getContacts() {
    this.CS.getContacts().subscribe((res) => {
      this.contacts = res;
      this.nbContacts = this.contacts.length;
      for (let cont of this.contacts) {
        if (cont.typeContact == "Friend") {
          this.count["Friend"] += 1;
          console.log(this.count);
        } else if (cont.typeContact == "Family") {
          this.count["Family"] += 1;
        } else if (cont.typeContact == "Work") {
          this.count["Work"] += 1;
        }
      }
      this.contacts = this.contacts.slice(0, 3);
    });
  }

  ngOnInit() {
    this.getContacts();
  }
}
