"use strict";
exports.__esModule = true;
exports.customerPr = void 0;
var customerPr = /** @class */ (function () {
    //properties
    function customerPr(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(customerPr.prototype, "firstName", {
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
    Object.defineProperty(customerPr.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return customerPr;
}());
exports.customerPr = customerPr;
/*donc les constructeurs permettent d'initiialiser avec
des valeurs directements*/ 
