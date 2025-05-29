/**
 * in apply method we it's just like call method 
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
    console.log(
        greeting1+ " " + this.firstName + " " + this.lastName + " " + greeting2
    )
}

// we pass the arguments as an array

invite.apply(emp1, ["Hello", "How are you?"]);
// output = Hello Abhishek Madiwale how are you?

invite.apply(emp2, ["Hello", "How are you?"]);
// output = Hello Vivek Abhyankar How are you?