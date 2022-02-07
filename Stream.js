const fs = require('fs');
let data = '';
const readerStream = fs.createReadStream('./input.txt');

readerStream.on('data', (chunk)=> {
    console.log('chunk data', chunk);
    data += chunk;
})


readerStream.on('end',function() {
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});
