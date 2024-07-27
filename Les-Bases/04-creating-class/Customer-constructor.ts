class Customer{

      //properties
      firstName: string;
      lastName: string;
      
      constructor(theFirst: string, theLast: string){
            this.firstName = theFirst;
            this.lastName = theLast;
      }
}

//utilisation
let myCustomer2 = new Customer("Ousmane", "Diop");

console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);

/*donc les constructeurs permettent d'initiialiser avec 
des valeurs directements*/