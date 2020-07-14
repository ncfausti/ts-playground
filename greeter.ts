(function () {

    class Student {
        fullName: string;
        constructor(public firstName: string, public middleInitial: string, public lastName: string) {
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }

        public toString = (): string => {
            return this.fullName;
        }
    }

    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person: Student) {
        return "Hello there, " + person.toString();
    }

    let user = new Student("Michael", "A.", "Bannister");

    document.body.textContent = greeter(user);
    
})();