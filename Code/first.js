let operatorObject=require('./add')

function greet(name){
    console.log("Hello " +name+"!");
}

greet("Shambhavi");

console.log(operatorObject.add(12,20));

console.log(operatorObject.subtract(12,20));