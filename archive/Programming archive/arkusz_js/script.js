function wesele() {
    goście = document.getElementById("goście").value

    if (document.getElementById("wyprawinami").checked) {
        cena = (goście * 100) * 1.3
    } else {
        cena = goście * 100
    }

    document.getElementById("koszt").innerHTML = `Koszt: ${cena}`
}