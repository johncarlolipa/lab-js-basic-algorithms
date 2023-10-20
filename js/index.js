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
  
  // 3.2
  let reverse = "";
  for (let navigator = hacker2.length - 1; navigator >= 0; navigator--) {
    reverse = hacker2[navigator];
    console.log(reverse);
  }
  
  // 3.3
  const minLength = Math.min(hacker1.length, hacker2.length);
  let firstInOrder = "";
  
  for (let i = 0; i < minLength; i++) {
    if (hacker1[i] < hacker2[i]) {
      firstInOrder = hacker1;
      break;
    } else if (hacker1[i] > hacker2[i]) {
      firstInOrder = hacker2;
      break;
    }
  }
  
  if (firstInOrder === "") {
    if (hacker1.length < hacker2.length) {
      firstInOrder = hacker1;
    } else {
      firstInOrder = hacker2;
    }
  }
  
  if (firstInOrder === hacker1) {
    console.log("The driver's name goes first.");
  } else if (firstInOrder === hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
  