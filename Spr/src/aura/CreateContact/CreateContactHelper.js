({
   
    createContact: function(component,firstname,lastname,Birthdate,birthdatetime) {
        console.log('inside helper');
        console.log('inside helper::firstname:'+firstname + 'lastname..'+lastname +'Birthdate..'+Birthdate +'birthdatetime..'+birthdatetime);
        var con= component.get("v.newContact");
        console.log('con..'+JSON.stringify(con));
    var action = component.get("c.saveContact");
        console.log('after method called.... '+ action);
    action.setParams({

        "firstname": firstname,
        "lastname": lastname,
         "Birthdate": Birthdate,
        "birthdatetime":birthdatetime
       

        //component.get("v.contacts")

     
    });

    action.setCallback(this, function(response){
        var state = response.getState();
        if (component.isValid() && state === "SUCCESS") {
            //var contacts = component.get("v.contacts");
            //contacts.push(response.getReturnValue());
           // component.set("v.contacts", contacts);
            alert('contact insert successfully');
             
        }
    });
    $A.enqueueAction(action);
},
    
})