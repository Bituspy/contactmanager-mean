const mongoose = require('mongoose');
const Cont = mongoose.model('Contact');

const getContacts = (request, response) => {
    Cont.find()
        .exec((error, contacts)=>{
            if(error){
                response
                    .status(400)
                    .json(error);
            }else{
                if(contacts){
                    response
                        .status(201)
                        .json(contacts);
                }else{
                    return response
                        .status(404)
                        .json({
                            "message": "contact not found"
                        });
                }
            }
        });
}

const createContact = (request, response) => {
    console.log(request.body.name.firstName)
    console.log(request.body.name.lastName);
    Cont.create({
        name: {
            firstname: request.body.name.firstName,
            lastname: request.body.name.lastName
        },
        email: request.body.email,
        phone: request.body.phone,
        typeContact: request.body.typeContact
    },(error, contact)=>{
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            response
                .status(201)
                .json(contact);
        }
    });

}

const updateContact = (request, response) => {
    const contactid = request.params.contactid;

    Cont.findById(contactid)
        .exec((error, contact) =>{
            if (!contact) {
                return response
                    .status(404)
                    .json({
                        "message": "contactid not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            contact.name.firstname = request.body.name.firstname;
            contact.name.lastname = request.body.name.lastname;
            contact.email = request.body.email;
            contact.phone = request.body.phone;
            contact.typeContact = request.body.typeContact
            contact.save((error, contact) => {
                if (error) {
                    response
                        .status(404)
                        .json(error);
                } else {
                    response
                        .status(200)
                        .json(contact);
                }
            });
        });
}

const deleteContact = (request, response) => {
    const {contactid} = request.params;
    if (contactid) { 
        Cont
            .findByIdAndRemove(contactid).exec((error, contact) => {
                    if (error) {
                     response
                            .status(404)
                            .json(error);
                    } 
                     response
                        .status(204)
                        .json({"message": "deleted"});
                    
                }
            );
    } else {
        return response.status(404).json({message: "contactid not found",});
    }
}

const readContact = (request, response) => {
    const contactid = request.params.contactid;
    Cont
        .findById(contactid)
        .exec((err, contact) => {
            if (!contact) {
                return response
                    .status(404)
                    .json({
                        "message": "contact not found"
                    });
            } else if (err) {
                return response
                    .status(404)
                    .json(err);
            }
            response
                .status(200)
                .json(contact);

        });
}
module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    readContact
}
