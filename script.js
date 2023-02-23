var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});

setTimeout(function() {
    document.getElementById("loade-photo-text").style.visibility = "visible";
}, 5000)