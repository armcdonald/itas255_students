// Below is an HTTP server running on port 9000
// The user accesses this server and specifies a query string with the month like localhost:9000/?theMonth=3
// The server must return:
//          winter if the month is 1, 2 or 3
//          spring if the month is 4, 5 or 6
//          fall if the month is 7, 8 or 9
//          winter if the month is 10, 11 or 12
//          hell freezing over if the month <=0
//          error for all other returns
//      You must include the month passed as a header with the key "theMonth" and the data the value of the month passed in the response object
//
//      You will need to use the url and the parsed query string portion of the url to get the value
//      You do not need to require any other modules than the ones given
//      You must use the techniques described in the vides

const http = require('http');
const url = require('url');
const PORT = 9000;

http.createServer((request, response) => {

}).listen(PORT);
console.log('Listening on port: ' + PORT);   