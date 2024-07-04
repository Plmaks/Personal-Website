function redirect(link, id) {
    window.open(link, "_blank")

    if (id != null) {
        document.getElementById(id).style = "color: blueviolet; text-decoration: line-through;"

        document.getElementById(id).onmouseover = function() 
        {
            this.style = "color: blue;"
        }
        document.getElementById(id).onmouseleave = function() 
        {
            this.style = "color: blueviolet; text-decoration: line-through;"
        }
    } else {}
}