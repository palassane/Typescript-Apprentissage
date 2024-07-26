class Customer{
   
  constructor(private _firstName: string, private _lastName: string){
   
  }

  public get firstName(){
    return this._firstName;
  }

  public get lastName(){
    return this._lastName;
  }

  public set firstName(value: string){
    this._firstName = value;
  }

  public set lastName(value: string){
    this._lastName = value;
  }
}

//let's create an instance
let myCustomer = new Customer("Alassane", "Ndiaye");



console.log(myCustomer.firstName);
console.log(myCustomer.lastName);