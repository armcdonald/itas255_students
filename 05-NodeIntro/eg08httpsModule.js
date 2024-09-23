const https = require('https');

const testUrls = ['www.cbc.ca', 'www.cnn.com', 'www.tsn.ca', 'www.flobikes.com','www.itas.ca','www.google.ca', 'www.ctvnews.ca'];

testUrls.forEach(theUrl => {
    let start = new Date();
    https.get({hostname: theUrl}, res => {
        console.log(`Got response from ${theUrl}`);
        console.log(`Response took: ${new Date() - start}ms`)
        // console.log(res.statusCode, res.statusMessage);
    })
})