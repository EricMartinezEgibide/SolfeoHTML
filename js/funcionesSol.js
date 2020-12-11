var aciertos = 0;
var fallos = 0;
var notaActual = 0;

class nota {
    constructor(path, nombre) {
        this.path = path;
        this.nombre = nombre;
    }
}

let notas = new Array();

$( document ).ready(function(){

    //CREO LOS COOKIES SI NO EXISTEN
    if(getCookie("score") == null){
        var score = [aciertos, fallos];
        document.cookie = "score=" + JSON.stringify(score);
    }else{
        var arrayCookies = document.cookie;
        arrayCookies = JSON.parse(arrayCookies.split('=').pop().split(';')[0]);
        aciertos = parseInt(arrayCookies[0]);
        fallos = parseInt(arrayCookies[1]);

        //Actualizo la interfaz
        let label = document.getElementById("LbPuntuacion")
        label.innerHTML = "Aciertos: " + aciertos + " | Fallos: " + fallos;
    }


    notas = generarArrayNotasSolEuro();

    generarNota()
});


function generarNota() {

    notaActual2 = notaActual;
    notaActual = getRandomInt(0, (notas.length));

    while (notaActual2 == notaActual) {
        if(notas.length <= 1){
            break;
        }
        notaActual = getRandomInt(0, (notas.length))
    }

    console.log(notaActual)

    document.getElementById("imgCentral").src = notas[notaActual].path;
}

function check() {
    let label = document.getElementById("LbPuntuacion")

    if (document.getElementById("txRespuesta").value.toLowerCase() == notas[notaActual].nombre) {
        aciertos += 1;
    } else {
        fallos += 1;
    }

    //Guardo la nueva puntuación en las cookies.
    var score = [aciertos, fallos];
    document.cookie = "score=" + JSON.stringify(score);

    //Actualizo la interfaz
    label.innerHTML = "Aciertos: " + aciertos + " | Fallos: " + fallos;
    document.getElementById("txRespuesta").value = "";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Al pulsar enter en el cuadro de texto
//https://stackoverflow.com/questions/905222/prevent-form-submission-on-enter-key-press
const node = document.getElementById("txRespuesta");
node.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        //Código

        if (!document.getElementById("txRespuesta").value == "") {

            if (document.getElementById("txRespuesta").value.toLowerCase() == "do" ||
                document.getElementById("txRespuesta").value.toLowerCase() == "re" ||
                document.getElementById("txRespuesta").value.toLowerCase() == "mi" ||
                document.getElementById("txRespuesta").value.toLowerCase() == "fa" ||
                document.getElementById("txRespuesta").value.toLowerCase() == "sol" ||
                document.getElementById("txRespuesta").value.toLowerCase() == "la" ||
                document.getElementById("txRespuesta").value.toLowerCase() == "si") {

                check();
                generarNota();
            }
        }
    }
});