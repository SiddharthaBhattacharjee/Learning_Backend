const x = 10;
const y = 15;

function add(a, b) {
  console.log(`The sum is ${a + b}`);
}

add(x, y);

// when we call a function in a module, even if not assigned to a variable or exported, it will be executed on module import 