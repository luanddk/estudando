var vetor = [5, 99, 6, 42, 20, 6];

var posMaisEco = 0;

for(i = 0; i < vetor.length; i++) {
    if (vetor[i] >= vetor[posMaisEco]) {
        posMaisEco = i;
    }
}

console.log(posMaisEco);
