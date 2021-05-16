/*Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e
 armazene os resultados em um vetor . Depois, mostre quantas vezes cada valor foi conseguido.
 Dica: use um vetor de contadores(1-6) e uma função para gerar numeros aleatórios,
simulando os lançamentos dos dados.
*/

/// dado = Math.floor(Math.random() * 6)+1;

resultados = new Array(100);
contador = [0,0,0,0,0,0];


for(i=0; i<100; i++){
    resultados[i] = Math.floor(Math.random() * 6)+1;
    contador[resultados[i]-1]++;
}

console.log(contador);