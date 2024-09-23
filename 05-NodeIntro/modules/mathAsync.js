const maths = {
    sum: (a,b,done) => {
        process.nextTick(() => {
            let c = a + b;
            done(null, c);
        })
    },
    diff: (a,b,done) => {
        process.nextTick(() => {
        let c = a - b;
        done(null, c);
        })
    },
    product: (a,b,done) => {
        process.nextTick(() =>
            done(null, a * b)
        );
    }
}

module.exports = maths;
