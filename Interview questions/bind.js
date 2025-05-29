const emp1 = {
    firstName: "Abhishek",
    lastName: "Madiwale"
}

const emp2 = {
    firstName: "Vivek",
    lastName: "Abhyankar"
}

function invite (greeting1, greeting2) {
    console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + " " + greeting2
    )
}

const invite1 = invite.bind(emp1);
const invite2 = invite.bind(emp2);

/**
 * Does not call function immediately 
 * it returns a new function
 */

invite1("Hello", "How are you?");
invite2("Hello", "How are you?");