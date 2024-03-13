function createGreeting(finalPhrase) {
  return function (name) {
    return `Hello, ${name}! ${finalPhrase}`;
  };
}

const greeting = createGreeting("How are you?");
console.log(greeting("John")); // Hello, John! How are you?
