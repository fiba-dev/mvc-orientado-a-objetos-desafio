import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts=new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if(options.action=="get")
    {  
      if(options.params=="id")
         return this.contacts.getOneById(options.params.id)
        
    }
    if(options.action=="save")
    {
      options.params.save()

    }
    
  }
}
export { ContactsController };
