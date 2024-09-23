const fs = require('fs');

fs.open(
    'lorem.txt', 'r',
    function(err, handle) {
        if (err) {
            console.log(`Error occurred on open: ${err.message}`);
            return;
        }

        let buf = new Buffer.alloc(100000);
        fs.read(handle, buf, 0, 100000, null, 
            function(err, length) {
                if (err) {
                    console.log(`Error occurred on read: ${err.message}`);
                    return; 
                }
                console.log(buf.toString('utf8', 0, length));
                fs.close(handle, err => {
                    if (err) {
                        console.log(`Error occurred on close: ${err.message}`);
                        return;
                    }
                });
        });
    });
