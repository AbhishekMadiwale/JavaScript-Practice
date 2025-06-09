/**
 * Output based questions on map, filter and reduce
 * 1) Return only names of students in capital
 */

let students = [
    {name:"Abhishek", rollNumber: 10, marks: 80},
    {name:"Shreyas", rollNumber: 31, marks: 70},
    {name:"Vivek", rollNumber: 20, marks: 43},
    {name:"Harish", rollNumber: 13, marks: 50},
];

const names = students.map((stu) => stu.name.toUpperCase())
console.log(names);

// 2) Return name of those students who scored more than 60 marks

const marks = students.filter((stu) => {
    return stu.marks > 60
},60)
console.log(marks)

// 3) Return name of the students who scored more than 60 and rollnumber greater than 15

const details = students.filter(stu => stu.marks > 60 && stu.rollNumber > 15);
console.log(details);

// 4) Calculate sum of all students marks

const marksSum = students.reduce((acc, curr) => acc + curr.marks,0);
console.log(marksSum);

// 5) Return name of the students who scored more than 60
const filteredNames = students.filter(stu => stu.marks > 60).map(stu => stu.name);
console.log(filteredNames);

// 6) Return the name of students whose marks are greater than 60 & 20 marks have been added 
// who scored less than 60

const graceStudents = students.map((stu) =>
    {if(stu.marks < 60) {
        stu.marks += 20;
    }
    return stu;
}
).filter(stu => stu.marks > 65).reduce((acc, curr) => acc + curr.marks,0);

console.log(graceStudents);