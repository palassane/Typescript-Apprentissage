class customerPrivate{

      //properties
      
      

      constructor(private _firstName: string,
                  private _lastName: string){
            }
      
      /*constructor(theFirst: string, theLast: string){
            this._firstName = theFirst;
            this._lastName = theLast;
      }*/

      public get firstName(): string{
            return this._firstName;
      }

      public set firstName(value: string){
            this._firstName = value;
      }

      public get lastName(): string {
            return this._lastName;
      }
      public set lastName(value: string) {
            this._lastName = value;
      }
}

//utilisation
let myCustomerPr = new customerPrivate("Ousmane", "Diop");


console.log(myCustomerPr.firstName);
console.log(myCustomerPr.lastName);

/*donc les constructeurs permettent d'initiialiser avec 
des valeurs directements*/