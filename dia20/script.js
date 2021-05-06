
var div = document.getElementById("titulo");
div.innerHTML = "Hello world";

var i = 0;
var alteraCor;
function percorreCor(idBotao) {

    if (idBotao == 'botao5') {
        if (i == 0) {
            document.body.style.backgroundColor = "red";
        } else if (i == 1) {
            document.body.style.backgroundColor = "green";
        } else if (i == 2) {
            document.body.style.backgroundColor = "blue";
        } else if (i == 3) {
            document.body.style.backgroundColor = "yellow";
        }
        alteraCor = setTimeout(function () {
            i++;
            percorreCor('botao5');
        }, 1000);
        if (i == 3) {
            i = 0;
        }
    }

}

function mudarCor(idBotao) {
    clearTimeout(alteraCor);
    if (idBotao == 'botao1') {
        document.body.style.backgroundColor = "red";
    } else if (idBotao == 'botao2') {
        document.body.style.backgroundColor = "green";
    } else if (idBotao == 'botao3') {
        document.body.style.backgroundColor = "blue";
    } else if (idBotao == 'botao4') {
        document.body.style.backgroundColor = "yellow";
    }
}
