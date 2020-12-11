
//https://stackoverflow.com/questions/5968196/how-do-i-check-if-a-cookie-exists
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}

function  generarArrayNotasSolEuro(){
    notas = new Array();

    if(document.getElementById("ck00").checked == true){
        notas.push (new nota("../img/Notas SOL/0.jpg", "sol"));
    }

    if(document.getElementById("ck01").checked == true){
        notas.push (new nota("../img/Notas SOL/1.jpg", "la"));
    }

    if(document.getElementById("ck02").checked == true){
        notas.push (new nota("../img/Notas SOL/2.jpg", "si"));
    }

    if(document.getElementById("ck03").checked == true){
        notas.push(new nota("../img/Notas SOL/3.jpg", "do"));
    }

    if(document.getElementById("ck04").checked == true){
        notas.push(new nota("../img/Notas SOL/4.jpg", "re"));
    }

    if(document.getElementById("ck05").checked == true){
        notas.push(new nota("../img/Notas SOL/5.jpg", "mi"));
    }

    if(document.getElementById("ck06").checked == true){
        notas.push(new nota("../img/Notas SOL/6.jpg", "fa"));
    }

    if(document.getElementById("ck07").checked == true){
        notas.push(new nota("../img/Notas SOL/7.jpg", "sol"));
    }

    if(document.getElementById("ck08").checked == true){
        notas.push(new nota("../img/Notas SOL/8.jpg", "la"));
    }

    if(document.getElementById("ck09").checked == true){
        notas.push(new nota("../img/Notas SOL/9.jpg", "si"));
    }

    if(document.getElementById("ck10").checked == true){
        notas.push(new nota("../img/Notas SOL/10.jpg", "do"));
    }

    if(document.getElementById("ck11").checked == true){
        notas.push(new nota("../img/Notas SOL/11.jpg", "re"));
    }

    if(document.getElementById("ck12").checked == true){
        notas.push(new nota("../img/Notas SOL/12.jpg", "mi"));
    }

    if(document.getElementById("ck13").checked == true){
        notas.push(new nota("../img/Notas SOL/13.jpg", "fa"));
    }

    if(document.getElementById("ck14").checked == true){
        notas.push(new nota("../img/Notas SOL/14.jpg", "sol"));
    }

    if(document.getElementById("ck15").checked == true){
        notas.push(new nota("../img/Notas SOL/15.jpg", "la"));
    }

    if(document.getElementById("ck16").checked == true){
        notas.push (new nota("../img/Notas SOL/16.jpg", "si"));
    }

    if(document.getElementById("ck17").checked == true){
        notas.push (new nota("../img/Notas SOL/17.jpg", "do"));
    }

    if(document.getElementById("ck18").checked == true){
        notas.push (new nota("../img/Notas SOL/18.jpg", "re"));
    }

    return notas;
}
