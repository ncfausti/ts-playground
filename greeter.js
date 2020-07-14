"use strict";
(function () {
    var Student = /** @class */ (function () {
        function Student(firstName, middleInitial, lastName) {
            var _this = this;
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.toString = function () {
                return _this.fullName;
            };
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
        return Student;
    }());
    function greeter(person) {
        return "Hello there, " + person.toString();
    }
    var user = new Student("Michael", "A.", "Bannister");
    document.body.textContent = greeter(user);
})();
