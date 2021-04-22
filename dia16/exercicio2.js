function ordenaArray(array) {
    p1 = array[0];
    p2 = array[1];
    p3 = array[2];

    if (p1 < p2 && p1 < p3) {
        if (p2 < p3) {
            return array;
        } else {
            let a = [array[0], array[2], array[1]];
            return a;
        }
    } else if (p2 < p1 && p2 < p3) {
        if (p3 < p1) {
            let a = [array[1], array[2], array[0]];
            return a;
        } else {
            let b = [array[1], array[0], array[2]];
            return b;
        }
    } else if (p3 < p1 && p3 < p2) {
        if (p1 < p2) {
            let a = [array[2], array[0], array[1]];
            return a;
        } else {
            let b = [array[2], array[1], array[0]];
            return b;
        }
    } else {
        return array;
    }
}

let array = [40,20,30];

let chamar = ordenaArray(array);

console.log(chamar);