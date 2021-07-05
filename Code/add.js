const { moveCursor } = require("readline");

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a - b;
}

console.log(add(1,3));

/*
module.exports={
    add,
    subtract
};
*/
//----Recommanded way
module.exports.add=add;
module.exports.subtract=subtract;