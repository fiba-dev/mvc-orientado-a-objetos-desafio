import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as contactsObject from "./contacts.json";
import { ContactsCollection } from "./models";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
      let control= new ContactsController();

     t.deepEqual(contactsObject,control.contacts.getAll())
    
});

 test("Testeo el método processOptions", (t) => {
     let control= new ContactsController()
     let coleccionContactos= new ContactsCollection()
     const mockContact = {
        id: 30,
        name: "Marce",
      };
      coleccionContactos.load();
      coleccionContactos.addOne(mockContact);
      let opcionGet1= new ContactsControllerOptions("get",3)
      let opcionGet2= new ContactsControllerOptions("get",55);
      let opcionSave= new ContactsControllerOptions("save",mockContact);
    let contactoGet1= control.processOptions(opcionGet1)
    let contactoGet2= control.processOptions(opcionGet2)
    let contactoSave= control.processOptions(opcionSave);
    const fileContent = jsonfile.readFileSync("./contacts.json");
    t.deepEqual(contactoGet1,coleccionContactos.getOneById(3));
    t.deepEqual(contactoGet2,coleccionContactos.getAll())
    console.log("fileContent",fileContent);
    console.log("contactoSave:",contactoSave);

    t.deepEqual(fileContent,contactoSave);
     




 });
