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

    // document.body.textContent = greeter(user);

    const element = document.getElementById('square');
    let start;

    function step(timestamp) {
        if (start === undefined)
            start = timestamp;
        const elapsed = timestamp - start;

        // `Math.min()` is used here to make sure that the element stops at exactly 200px.
        element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

        if (elapsed < 2000) { // Strop the animation after 2 seconds
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
    
})();