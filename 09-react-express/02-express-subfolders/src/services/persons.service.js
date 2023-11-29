const data = require('../../data/somedata.json');

async function get(req){
    //return 
    let retVal = null;

    console.log(req.params);
    if (!req.params.id) {
        retVal = data;
    } else {
        let userId = Number(req.params.id);
        console.log(data[userId]);
        retVal = data[userId];
    }
    return (retVal);
}

module.exports = {
  get
}
