const https = require('https');
const fs = require('fs');

const options = {
    hostname: "en.wikipedia.org",
    path: "/wiki/Caterpillar",
    method: "get",
    port: 443
}

const request = https.request(options, res => {
    let resBody = "";
    res.setEncoding("UTF-8");

    res.on("data", chunk => {
        console.log(`Chunk received ${chunk.length}`);
        resBody += chunk;
    });

    res.on("end", () => {
        fs.writeFile("./cat.html", resBody, err => {
            if (err) throw err;
            console.log('file written');
        });    
    });
});

request.end();