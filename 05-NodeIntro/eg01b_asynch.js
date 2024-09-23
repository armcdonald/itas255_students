const fs = require('fs');

function doMyFunction() {

}

fs.readdir('/Users/allan.mcdonald', (err, data) => {
    console.log(`/Users contains: ${data}\n\n`);
    fs.readdir('/usr/bin', (err, data) => {
        console.log(`usr/bin contains: ${data}\n\n`);
    })
});


fs.readdir('/', (err, data) => {
    console.log(`/ root contains: ${data}\n\n`);
});

console.log(`


this comes after


`);