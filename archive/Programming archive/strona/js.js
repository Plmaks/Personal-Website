function background(color) {
    var element = document.body;
    element.classList.toggle("dark-mode");
} 

function onload() {
    setTimeout(background, 5000);
    setTimeout(onload, 5000)
}