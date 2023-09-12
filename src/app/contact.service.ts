import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}
//read contact by id
  readContact(id){

return this.httpClient.get("http://localhost:3000/api/contacts/" + id);

  }
//read all contacts
  getContacts() {
    return this.httpClient.get("http://localhost:3000/api/contacts/");
  }

//add a new contact

addContact(addForm){
  return this.httpClient.post("http://localhost:3000/api/contacts/", addForm);
}
//edit a specific contact by giving its ID and its new data to update

  editContact(id,editForm){
     return this.httpClient.put(
       "http://localhost:3000/api/contacts/" + id,
       editForm
     );
  }
//delete a specific contact by id
  deleteContact(id) {
    return this.httpClient.delete("http://localhost:3000/api/contacts/" + id);
  }
//add address to a specific contact by sending the ID and address values
addAddress(id,addForm){
 return this.httpClient
      .post(
        "http://localhost:3000/api/contacts/" + id + "/address/",
        addForm
      );
}

//read a specific address by both contact ID and Address ID
readAddress(id_c,id_a){
 return this.httpClient.get(
   "http://localhost:3000/api/contacts/" +
     id_c +
     "/address/" +
     id_a
 );
}

//Edit a specific Address by giving the contact,address IDs and new values
editAddress(id_c,id_a,editForm){

 return this.httpClient.put(
     "http://localhost:3000/api/contacts/" +
       id_c +
       "/address/" +
       id_a,
     editForm
   );
}

//delete a contact's specific address by id 
  deleteAddress(cid, aid) {
    return this.httpClient
      .delete("http://localhost:3000/api/contacts/" + cid + "/address/" + aid);
  }
}
