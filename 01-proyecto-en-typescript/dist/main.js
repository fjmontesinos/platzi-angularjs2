"use strict";
require("./datos");
var Users = (function () {
    function Users(name, age) {
        this.usuario = {
            name: name,
            age: age
        };
        console.log(this.usuario);
    }
    return Users;
}());
var u = new Users('Javier', 44);
//# sourceMappingURL=main.js.map