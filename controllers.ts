import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
    constructor(action,params)
    {  this.action=action;
      this.params=params;
       

    }

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
      if(typeof options.params== "number")
         return this.contacts.getOneById(options.params)
            else 
                return this.contacts.getAll();
         
             
        
    }
    if(options.action=="save")
    { this.contacts.addOne(options.params);
      this.contacts.save();
     

    }
    return this.contacts.getAll();
  }
}
export { ContactsController };
