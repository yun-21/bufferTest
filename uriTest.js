const uri = 'http://localhost:8080/?안녕=입니다';

const encode = encodeURI(uri);
console.log(encode);

try{
    console.log(decodeURI(encode));
}
catch(err){
    console.error(err);
}