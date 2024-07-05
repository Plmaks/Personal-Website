function student(imie, nazwisko, avg, eye, based, race, height) {
    this.imie = imie
    this.nazwisko = nazwisko
    this.avg = avg
    this.eye = eye
    this.based = based
    this.race = race
    this.height = height
}

function uczniowie() {
    const Max = new student("Max", "Bor", "4.2", "niebieski", "tak", "biały", "180 cm")
    const Aleks = new student("Aleks", "Romanek", "1.6", "niebieski", "tak", "biały", "180 cm")
    const Ania = new student("Ania", "Boszewska", "3.5", "niebieski", "tak", "biały", "180 cm")
    const Januszex = new student("Januszex", "Januszewski", "2.7", "niebieski", "tak", "biały", "180 cm")
    const Alexei = new student("Alexei", "Goleniewski", "4.7", "niebieski", "tak", "biały", "180 cm")
    const Romanov = new student("Romanov", "Romanovski", "3.5", "niebieski", "tak", "biały", "180 cm")
    const Paweł = new student("Paweł", "Pawełski", "0.5", "niebieski", "tak", "biały", "180 cm")

    document.getElementById("uczniowie").innerHTML = Max.imie + " " + Max.nazwisko + " "  + Max.avg + " " + Max.eye + " " + Max.based + " " + Max.race + " " + Max.height + " "  + "<br>" + Aleks.imie + " "  + Aleks.nazwisko + " "  + Aleks.eye + " " + Aleks.based + " " + Aleks.race + " " + Aleks.height + " "  + "<br>" + Ania.imie + " "  + Ania.nazwisko + " "  + Ania.avg + " " + Ania.eye + " " + Ania.based + " " + Ania.race + " " + Ania.height + " "   + "<br>" + Januszex.imie + " "  + Januszex.nazwisko + " "  + Januszex.avg + " " + Januszex.eye + " " + Januszex.based + " " + Januszex.race + " " + Januszex.height + " " + "<br>" + Alexei.imie + " "  + Alexei.nazwisko + " "  + Alexei.avg + " " + Alexei.eye + " " + Alexei.based + " " + Alexei.race + " " + Alexei.height + " "  + "<br>" + Romanov.imie + " "  + Romanov.nazwisko + " "  + Romanov.avg + " " + Romanov.eye + " " + Romanov.based + " " + Romanov.race + " " + Romanov.height + " " + "<br>" + Paweł.imie + " "  + Paweł.nazwisko + " "  + Paweł.avg + " " + Paweł.eye + " " + Paweł.based + " " + Paweł.race + " " + Paweł.height   
    document.getElementById("uczniowie").style = "visibility: visible; color: red;"
}
