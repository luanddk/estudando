function calcularAbono(salario){
    return salario*0.2;
}

function maiorAbono(abono){
    var maiorValor = -999;
    for(i=0; i<abono.length; i++){
        if(abono[i] > maiorValor){
            maiorValor = abono[i]
        }
    }
    return maiorValor;
}

function q20(){
    salario = [];
        condicaoDeParada = -1;
        while(condicaoDeParada != 0){
            condicaoDeParada = parseFloat(prompt("Informe o salário do funcionário: "));
            if(condicaoDeParada === 0){
                break;
            }
            salario.push(condicaoDeParada);   
        }

        var abono = new Array(salario.length);
        var totalAbono = 0;
        var menorQueMinimo = 0;
        for(i=0; i<abono.length; i++){
            var abonoTotal = calcularAbono(salario[i]);
            if(abonoTotal < 100){
                abono[i] = 100;
                menorQueMinimo++;
            }else{
                abono[i] = abonoTotal;
            }
            totalAbono += abono[i];
        }
        document.write("Salário - Abono <br/><br/>")
        for(i=0; i<salario.length; i++){
            document.write('R$ ' + salario[i].toFixed(2) + ' - R$ ' + abono[i].toFixed(2) + '<br/>');
        }

        document.write("<br/>Foram processados "+abono.length+" colaboradores <br/>");
        document.write("Total gasto com abonos: R$ "+totalAbono.toFixed(2)+"<br/>");
        document.write("Valor mínimo pago a "+menorQueMinimo+" colaboradores <br/>");
        document.write("Maior valor de abono pago: R$ " + maiorAbono(abono).toFixed(2))
}