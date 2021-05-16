vetor = ['a', 'b', 'c', 'd', 'e'];

function procuraLetra(letra, vetor) {
    for (i = 0; i < vetor.length; i++) {
        if (letra == vetor[i]) {
            return true;
        }
    }
    return false;
}

console.log(procuraLetra('e', vetor));


