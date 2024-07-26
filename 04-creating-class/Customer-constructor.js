"use strict";
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//utilisation
var myCustomer2 = new Customer("Ousmane", "Diop");
console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);
/*donc les constructeurs permettent d'initiialiser avec
des valeurs directements*/ 
