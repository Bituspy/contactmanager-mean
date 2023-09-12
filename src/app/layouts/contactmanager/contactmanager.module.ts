import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactManagerRoutes } from "./contactmanager.routing";
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { addContactComponent } from '../../addcontact/addcontact.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ManageContactsComponent } from "../../managecontacts/managecontacts.component";
import { updateContactComponent } from "../../managecontacts/updatecontact/updatecontact.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { updateAddressComponent } from "../../managecontacts/updateaddress/updateaddress.component";
import { addAddressComponent } from "../../managecontacts/addaddress/addaddress.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContactManagerRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatExpansionModule,
  ],
  declarations: [
    DashboardComponent,
    addContactComponent,
    ManageContactsComponent,
    updateContactComponent,
    updateAddressComponent,
    addAddressComponent,
  ],
})
export class ContactManagerModule {}
