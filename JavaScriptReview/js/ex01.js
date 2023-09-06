function greeting(theName) {
    console.log(`Hello ${theName}`);
}

let greeting2 = function(theName) {
    console.log(`Greetings or wise and benevolent ${theName}`);
}

function processUserInput(callBackFn) {
    let nameInput = prompt(`Please enter your name: `);
    callBackFn(nameInput);
}

processUserInput(greeting);
processUserInput(greeting2);