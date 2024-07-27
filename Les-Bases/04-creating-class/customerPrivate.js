var customerPrivate = /** @class */ (function () {
    //properties
    function customerPrivate(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(customerPrivate.prototype, "firstName", {
        /*constructor(theFirst: string, theLast: string){
              this._firstName = theFirst;
              this._lastName = theLast;
        }*/
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(customerPrivate.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return customerPrivate;
}());
//utilisation
var myCustomerPr = new customerPrivate("Ousmane", "Diop");
console.log(myCustomerPr.firstName);
console.log(myCustomerPr.lastName);
/*donc les constructeurs permettent d'initiialiser avec
des valeurs directements*/ 
