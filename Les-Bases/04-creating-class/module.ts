export class customerPr{

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



/*donc les constructeurs permettent d'initiialiser avec 
des valeurs directements*/