const fs= require("fs");

import { ContactsController } from "./controllers";


class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
constructor()
{
  this.contactos=[]
}
contactos:Contact[]=[];
 

 load()
 { 
      
     
    let contactosAParsear = fs.readFileSync(__dirname + "/contacts.json").toString();
     this.contactos = JSON.parse(contactosAParsear);
   return this.contactos;
   
 }
//  getAll() debe devolverme la collection completa

getAll()
{
  return this.contactos;

}

// addOne(contact) {} debe agregar un contacto a la lista

addOne(contact:Contact)
{
  return this.contactos.push(contact);

}
// save debe escribir todo el objeto interno en el archivo contacts.json

save()
{
 let datos=JSON.stringify(this.contactos);
  
  fs.writeFileSync(__dirname+"/contacts.json", datos, function (err) {
    if (err) {
      console.log("failed to save");
    } else {
      console.log("succeeded in saving");
    }
  });
}
// getOneById(id) debe devolver uno de los contactos por id

getOneById(id:number)
{  
 let encontrado=this.contactos.find(n=>n.id==id);

return encontrado;
}




}
export { ContactsCollection };
