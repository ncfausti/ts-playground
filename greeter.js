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
    // document.body.textContent = greeter(user);
    var element = document.getElementById('square');
    var start;
    function step(timestamp) {
        if (start === undefined)
            start = timestamp;
        var elapsed = timestamp - start;
        // `Math.min()` is used here to make sure that the element stops at exactly 200px.
        element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';
        if (elapsed < 2000) { // Strop the animation after 2 seconds
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
})();
