function func1() {
    mode = document.getElementById("opcje").value;

    switch(mode) {
        case "k":
            a = parseInt(document.getElementById("inp1").value);
            pole = a ** 2;
            document.getElementById("wynik").innerHTML = "Wynik: " + pole;
            break;
        case "p":
            a = parseInt(document.getElementById("inp1").value);
            b = parseInt(document.getElementById("inp2").value);
            pole = a * b;
            document.getElementById("wynik").innerHTML = "Wynik: " + pole;
            break;
        case "t":
            a = parseInt(document.getElementById("inp1").value);
            h = parseInt(document.getElementById("inp3").value);
            pole = (a * h) / 2;
            document.getElementById("wynik").innerHTML = "Wynik: " + pole;
            break;
        case "r":
            a = parseInt(document.getElementById("inp1").value);
            h = parseInt(document.getElementById("inp3").value);
            pole = a * h;
            document.getElementById("wynik").innerHTML = "Wynik: " + pole;
            break;
        case "t2":
            a = parseInt(document.getElementById("inp1").value);
            b = parseInt(document.getElementById("inp2").value);
            h = parseInt(document.getElementById("inp3").value);
            pole = ((a + b) * h) / 2;
            document.getElementById("wynik").innerHTML = "Wynik: " + pole;
            break;
        case "r2":
            a = parseInt(document.getElementById("inp1").value);
            h = parseInt(document.getElementById("inp3").value);
            pole = a * h;
            document.getElementById("wynik").innerHTML = "Wynik: " + pole;
            break;
        default:
            console.log("Err");
    }
}

function func2() {
    mode = document.getElementById("opcje").value;

    switch(mode) {
        case "k":
            document.getElementById("inp2").style.visibility = "hidden";
            document.getElementById("inp3").style.visibility = "hidden";
            document.getElementById("inp1").style.visibility = "visible";
            break;
        case "p":
            document.getElementById("inp3").style.visibility = "hidden";
            document.getElementById("inp1").style.visibility = "visible";
            document.getElementById("inp2").style.visibility = "visible";
            break;
        case "t":
            document.getElementById("inp2").style.visibility = "hidden";
            document.getElementById("inp1").style.visibility = "visible"
            document.getElementById("inp3").style.visibility = "visible"
            break;
        case "r":
            document.getElementById("inp2").style.visibility = "hidden";
            document.getElementById("inp1").style.visibility = "visible";
            document.getElementById("inp3").style.visibility = "visible";
            break;
        case "t2":
            document.getElementById("inp1").style.visibility = "visible";
            document.getElementById("inp2").style.visibility = "visible";
            document.getElementById("inp3").style.visibility = "visible";
            break;
        case "r2":
            document.getElementById("inp2").style.visibility = "hidden";
            document.getElementById("inp1").style.visibility = "visible";
            document.getElementById("inp3").style.visibility = "visible";
            break;
        default:
            console.log("Err");
    }
}