const mySearch = new Promise(function(resolve, reject) {
    const searchResult = false;
    if (searchResult) {
        value = 'found resume';
        resolve(value);
    } else {
        value = "didn't find resume";
        reject(value);
    }
});

const jobInterview = () => {
    mySearch
    .then((result) => {
        console.log(`Interview went well, because ${result}`);
    // },
    // (nope) => {
    //     console.log(`Nope, he's jobless because ${nope}`);
    // })
    })
    .catch((error) => {
        console.log(`Didn't get job because ${error}`);
    })
    .finally(() => {
        console.log(`Everything will work out in the end`);
    })

}


jobInterview();