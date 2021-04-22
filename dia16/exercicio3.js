function reverso(array){
    return [array[2], array[1], array[0]];
}

let numeros = [20,3,300000];

let chamar = reverso(numeros);

console.log(chamar)

for(var i= chamar.length-1; i>=0 ; i--){
    console.log(chamar[i]);
}