function calc() {
    int = parseInt(document.getElementById("1").value)
    int2 = parseInt(document.getElementById("2").value)
    suma = int + int2

    window.alert("Wynik: " + suma)
}

function calc2() {
    int = parseInt(document.getElementById("1").value)
    int2 = parseInt(document.getElementById("2").value)

    if (document.getElementById("opcje").value == "+") {
        wynik = int + int2
    }
    if (document.getElementById("opcje").value == "-") {
        wynik = int - int2
    }
    if (document.getElementById("opcje").value == "/") {
        wynik = int / int2
    }
    if (document.getElementById("opcje").value == "*") {
        wynik = int * int2
    }
    if (document.getElementById("opcje").value == "**") {
        wynik = int ** int2
    }
    if (document.getElementById("opcje").value == "%") {
        wynik = int % int2
    }

    window.alert("Wynik: " + wynik)
}

function calc3() {
    i = 0
    t3 = document.getElementById("t3").value
    while (i <= t3) {
        window.alert(i) 
        i++
    }
}

function funkcja() {
    alert("Hello World!")
}

function funkcja2() {
    op = parseInt(document.getElementById("t4").value)

    if (op > 5) {
        alert("liczba jest większa niż 5")
    } else if (op == 5) {
        alert("liczba jest równa 5")
    } else {
        alert("liczba jest mniejsza od 5")
    }
}

function funkcja3() {
    wiek = parseInt(document.getElementById("t5").value)
    data = parseInt(new Date().getFullYear())
    wynik = (wiek - data) * -1

    alert("Masz " + wynik + " Lat")
}

function funkcja4() {
    rok = parseInt(document.getElementById("t6").value)
    data = parseInt(new Date().getFullYear())
    urodzenia = data - rok

    alert("Data urodzenia: " + urodzenia )
}