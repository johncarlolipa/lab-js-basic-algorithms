console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = "Drivername";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Navigatorname";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name , it has ${hacker1Length}`);
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Length}`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1Length} characters! `
  );
}

// Iteration 3: Loops

// 3.1
for (let driver = 0; driver < hacker1.length; driver++) {
    let upperCase = hacker1[driver].toUpperCase();
    let separate = upperCase + " ";
    console.log(separate);
  }
  
 
  