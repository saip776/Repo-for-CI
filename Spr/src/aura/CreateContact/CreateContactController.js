({
    clickCreateContact: function(component, event, helper) {
        console.log('inside click create contact');
	//var con = component.get("v.newContact");
        
        // Simplistic error checking
        var validExpense = true;
        
        // Name must not be blank
        var firstnameField = component.find("fstname");
        var firstname = firstnameField.get("v.value");
        console.log('firsttname.....'+firstname);
        
        if ($A.util.isEmpty(firstname)){
            validExpense = false;
            firstnameField.set("v.errors", [{message:"First name can't be blank."}]);
        }
        else {
            firstnameField.set("v.errors", null);
        }
        
        var lastnameField = component.find("lstname");
        var lastname = lastnameField.get("v.value");
        
        console.log('larname.....'+lastname);
        
        if ($A.util.isEmpty(lastname)){
            validExpense = false;
            lastnameField.set("v.errors", [{message:"Last Name can't be blank."}]);
        }
        else {
            // If the amount looks good, unset any errors...
            lastnameField.set("v.errors", null);
        }
        
        var birthdateField = component.find("Birthdate");
        var Birthdate = birthdateField.get("v.value");
        console.log('Birthdate....'+Birthdate);
        
        var bdatetimeField = component.find("birthdatetime");
        var birthdatetime = bdatetimeField.get("v.value");
        console.log('birthdatetime....'+birthdatetime);
        
            
       if(validExpense){
            // Create the new expense
           var newContact = component.get("v.newContact");
            								
            //var newAccount = component.get("v.newAccount");
            console.log("Create Contact: " + JSON.stringify(newContact));
           // console.log("Create Account: " + JSON.stringify(newAccount));

           //helper.createAccount(component, newAccount);
           helper.createContact(component,firstname,lastname,Birthdate,birthdatetime);
           //<c:FormContact />
           
       }
    },
})