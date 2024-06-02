const {Buffer} = require("buffer");
const txt = '안녕=이야'

//base64로 인코딩
const encoding = Buffer.from(txt).toString('base64');
console.log(encoding);

//base64로 디코딩
const decoding = Buffer.from(encoding, 'base64').toString('utf8');
console.log(decoding)