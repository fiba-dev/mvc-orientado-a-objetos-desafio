import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as contactsObject from "./contacts.json";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
      let control= new ContactsController();

     t.deepEqual(contactsObject,control.contacts.getAll())
    
});

 test("Testeo el método processOptions", (t) => {
     let control= new ContactsController()
     const mockContact = {
        id: 30,
        name: "Marce",
      };
      let opciones= new ContactsControllerOptions()
     control.processOptions()
     




 });
