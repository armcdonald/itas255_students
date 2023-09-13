const functionThatTakesALongTime = new Promise(function(resolve, reject) {
    //todo: something that takes a long time
    functionToGetData();
    if (success) {
        resolve(data)
    }
});

function getData() {
    functionThatTakesALongTime
        .then((result) => {
            //todo: Do cool things with the data in result
        })
}

//=============================================================\\
// async/await method
//=============================================================\\

async function getDataAsync() {
    let result = await functionToGetData();
    //todo: Do cool things with the data in result
}