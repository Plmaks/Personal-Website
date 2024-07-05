function sprawdź() {
    let hasełko = document.getElementById("pass").value
    let wynik = document.getElementById("wynik")
    
    if (hasełko.length >= 7 && hasNumber(hasełko)) {    ``
        wynik.innerHTML = "DOBRE"
    } if (hasełko.length >= 4 && hasełko.length <= 6 && hasNumber(hasełko)) {    
        wynik.innerHTML = "ŚREDNIE"
    } else {
        wynik.innerHTML = "SŁABE"
    }

    console.log(hasełko)
}

function hasNumber(str) {
    return /\d/.test(str);
}