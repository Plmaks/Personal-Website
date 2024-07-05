var amount = 0
var power = 1
var nuggets = 0

// hotkeys
document.addEventListener("keydown", Getkey)

function Getkey(Pressed) {
    Key = Pressed.key
    
    switch (Key) {
        case "1":
            while (amount >= 10) {
                chicken()
            }
            break;
        case " ":
            add()
            break;
        default:
            console.log(Key)
            break;
    }

    return Key
}
// 

function add() {
    amount += power /*+ nuggets legacy code lol */ + upg(upg_1, 1) + upg(upg_2, 2) + upg(upg_3, 3) + upg(upg_4, 4) + upg(upg_5, 5)
    document.getElementById("licznik").innerHTML = amount
}

// Function to the functions for the mutligrades cuz why not
var cost_1 = 10
var cost_2 = 25
var cost_3 = 50
var cost_4 = 100
var cost_5 = 250
// amount of upgrades purchased, surprising I know. 0 for obvious reasons
var upg_1 = 0
var upg_2 = 0
var upg_3 = 0
var upg_4 = 0
var upg_5 = 0
// increment upgrade cost for diff scaling
function cost_change(cost) {
    if (amount >= cost_1) {
        amount -= cost
        n_cost += cost
        cost += n_cost

        document.getElementById("amount").innerHTML = amount
        document.getElementById("cost_1").innerHTML = cost_1
    }
}
// buying upgrades
function upgrade(upgrade_num) {
    switch (upgrade_num) {
        case "1":

    }
}
// upgrade functions
function upg1() {
    if (amount >= document.getElementById("cost1")) {
        cost_change(cost_1)
        
    }
}

// Multigrades
function upg(upg_num, g) {
    res = upg_num * g
    return res
}

// e.x upg1(upg1, 2)
// 

function reset() {
    amount = 0
    document.getElementById("licznik").innerHTML = amount
}

/*
function chicken() {
    if (amount >= 10) {
        amount -= 10
        document.getElementById("licznik").innerHTML = amount
        power += 1
        document.getElementById("farm").innerHTML += '<img id="chickens" src="img/chicken.png" width="50px" height="50px">'
    } else {alert("lol no")}
}

function nugget() {
    if (amount >= 10) {
        amount -= 10
        nuggets += 1
        document.getElementById("licznik").innerHTML = amount
        document.getElementById("res").innerHTML += "<button onclick='jedz()' id='elem_res'>🍗</button>"
    } else {
        alert("🤣TOO FAT TO FLY🤣")
    }
}

function jedz() {
    amount += 10
    nuggets -= 1
    document.getElementById("licznik").innerHTML = amount

    var divver = document.getElementById("res")
    var kolejka = divver.getElementsByTagName("button")
    var last = kolejka[kolejka.length - 1]
    divver.removeChild(last)
}
*/