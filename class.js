var person = /** @class */ (function () {
    function person(firstname) {
        this.firstname = firstname;
    }
    person.prototype.disp = function () {
        console.log("the name is:" + this.firstname);
    };
    return person;
}());
