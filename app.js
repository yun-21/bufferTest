const {Buffer} = require('buffer');

const buf = Buffer.from('hello','utf8');

console.log(buf);
console.log(buf.toString());