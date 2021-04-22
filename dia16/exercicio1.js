function ordena(array){
    p1 = array[0]; // p1 = 4
    p2 = array[1]; // p2 = 2

    if(p1 < p2){
        return array;
    }else{
        array[0] = p2;
        array[1] = p1;
        return array;
    }
}

var array= [10,2];

let a = ordena(array);

console.log(a);
