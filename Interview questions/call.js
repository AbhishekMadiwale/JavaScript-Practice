/**
 * In call method we pass the array of the arguments
 */

const emp1 = { 
    firstName: "Abhishek",
    lastName: "Madiwale"
}

const emp2 = {
    firstName: "Vivek",
    lastName: "Abhyankar"
}

function invite (greeting1, greeting2) {
    console.log(greeting1 + " " + this.firstName + " " + this.lastName + " "+ greeting2);
}

/**
 * here we pass the arguments individually
 * immediately calls the function
*/  


invite.call(emp1, "Hello", "How are you?");
invite.call(emp2, "Hello", "How are you?");