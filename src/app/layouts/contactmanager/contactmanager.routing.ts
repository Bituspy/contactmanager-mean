import { Routes } from '@angular/router';
import { ManageContactsComponent } from '../../managecontacts/managecontacts.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { updateContactComponent } from '../../managecontacts/updatecontact/updatecontact.component';
import { addContactComponent } from "../../addcontact/addcontact.component";


export const ContactManagerRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "addcontact", component: addContactComponent },
  { path: "managecontacts", component: ManageContactsComponent },
  { path: "updatecontact", component: updateContactComponent },
];
