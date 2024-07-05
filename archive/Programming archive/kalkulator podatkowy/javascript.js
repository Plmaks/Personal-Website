function Ogólna() {
    document.getElementById("Ogólna").style.visibility = "visible"
    document.getElementById("Ryczałtu").style.visibility = "hidden"
    document.getElementById("Liniowa").style.visibility = "hidden"
}

function Ryczałtu() {
    document.getElementById("Ogólna").style.visibility = "hidden"
    document.getElementById("Ryczałtu").style.visibility = "visible"
    document.getElementById("Liniowa").style.visibility = "hidden"
}

function Liniowa() {
    document.getElementById("Ogólna").style.visibility = "hidden"
    document.getElementById("Ryczałtu").style.visibility = "hidden"
    document.getElementById("Liniowa").style.visibility = "visible"
}

function Podatki1() {
    dochód = document.getElementById("dochód").value
    Podatek = document.getElementById("Ogólna").value

    brutto = document.getElementById("dochód").value
    netto = dochód * Podatek
    kwota = brutto - netto

    if(kwota<10000) {
        document.getElementById("kasa").style.visibility = "visible"
        document.getElementById("brak_kasy").style.visibility = "hidden"
    } else {
        document.getElementById("kasa").style.visibility = "hidden"
        document.getElementById("brak_kasy").style.visibility = "visible"
    }

    alert("Brutto: " + brutto + "\n" + "Netto: " + netto + "\n" + "Kwota do zapłaty: " + kwota)
}

function Podatki2() {
    dochód = document.getElementById("dochód").value
    Podatek = document.getElementById("Ryczałtu").value

    brutto = document.getElementById("dochód").value
    netto = dochód * Podatek
    kwota = brutto - netto

    if(kwota<10000) {
        document.getElementById("kasa").style.visibility = "visible"
        document.getElementById("brak_kasy").style.visibility = "hidden"
    } else {
        document.getElementById("kasa").style.visibility = "hidden"
        document.getElementById("brak_kasy").style.visibility = "visible"
    }

    alert("Brutto: " + brutto + "\n" + "Netto: " + netto + "\n" + "Kwota do zapłaty: " + kwota)
}

function Podatki3() {
    dochód = document.getElementById("dochód").value
    Podatek = document.getElementById("Liniowa").value

    brutto = document.getElementById("dochód").value
    netto = dochód * Podatek
    kwota = brutto - netto

    if(kwota<10000) {
        document.getElementById("kasa").style.visibility = "visible"
        document.getElementById("brak_kasy").style.visibility = "hidden"
    } else {
        document.getElementById("kasa").style.visibility = "hidden"
        document.getElementById("brak_kasy").style.visibility = "visible"
    }

    alert("Brutto: " + brutto + "\n" + "Netto: " + netto + "\n" + "Kwota do zapłaty: " + kwota)
}