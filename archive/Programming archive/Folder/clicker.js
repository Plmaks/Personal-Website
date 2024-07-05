function Ciastko() {
    let ilość = parseInt(document.getElementById("Ciastka").innerHTML) + 1 

    document.getElementById("Ciastka").innerHTML = ilość
    document.getElementById("Ciastka").value = ilość
}

function losowanie() {
    liczba = Math.floor(Math.random() * 100)

    document.getElementById("Ciastka").innerHTML = liczba
}

function zgadywanie() {
    random = Math.floor(Math.random() * 9)

    answer = prompt("Wpisz liczbę między 0-9")

    while (answer != random) {
        answer = prompt("Wpisz liczbę między 0-9")
    }

    alert("Zgadłeś liczbę! \n W nagrodę dostajesz " + answer + " ciastek!")

    document.getElementById("Ciastka").innerHTML = parseInt(document.getElementById("Ciastka").innerHTML) + parseInt(answer)
}