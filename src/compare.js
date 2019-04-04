let { readfileSync } = require('./utill/index.js');
let { compare } = require('./utill/compare.js');


let oldJson = readfileSync('result/localImg_8.json');
let newJson = readfileSync('result/localImg_8_change.json');

console.log(compare(oldJson, newJson));