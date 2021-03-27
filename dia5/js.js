// NOT
console.log("----NOT----")
let a = 1+1;

if(!(a==3)){
    console.log(true);
}else{
    console.log(false);
}
// AND
console.log("----AND----")
if(true && true){
    console.log("1 1")
}

if(true && false){
    console.log("1 0")
}

if(false && true){
    console.log("0 1")
}

if(false && false){
    console.log("0 0")
}

// NAND
console.log("----NAND----")
if(!(true && true)){
    console.log("1 1")
}

if(!(true && false)){
    console.log("1 0")
}

if(!(false && true)){
    console.log("0 1")
}

if(!(false && false)){
    console.log("0 0")
}

// OR

console.log("----OR----")
if(true || true){
    console.log("1 1")
}

if(true || false){
    console.log("1 0")
}

if(false || true){
    console.log("0 1")
}

if(false || false){
    console.log("0 0")
}

// NOR
console.log("----NOR----")
if(!(true || true)){
    console.log("1 1")
}

if(!(true || false)){
    console.log("1 0")
}

if(!(false || true)){
    console.log("0 1")
}

if(!(false || false)){
    console.log("0 0")
}


if(!(!false || true)){
    console.log("ENTROU 1")
}

a=2;
let b=3;
let c='c';

if(((a+b)==5) && (c!='s')){
    console.log("ENTROU 2")
}else{
    console("NAO ENTROU 2")
}

if((!(!(!(1>2))) && !(1>=1)) == false){
    console.log("entrou 3")
}