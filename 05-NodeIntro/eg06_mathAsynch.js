const asynchMath = require('./modules/mathAsync.js');

asynchMath.diff(5, 3, (err, result) => {
    if (err) {
        console.log(`Error ${err.message}`);
        throw err;
    }
    asynchMath.sum(result, 5, (err, sumData) => {
        if (err) {
            console.log(`Error ${err.message}`);
            throw err;
        }
        console.log(`The resulting sum is ${sumData}`);
    });
    console.log(`The difference is: ${result}`);
})

asynchMath.sum(5, 3, (err, result2) => {
    if (err) {
        console.log(`Error ${err.message}`);
        throw err;
    }
    console.log(`The sum is: ${result2}`);
})
