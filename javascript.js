
let mybutton = document.getElementById("myBtn");

function topFunction(){
    document.body.scroll = 1600;
    document.documentElement.scrollTo = 1600;
    console.log('clicado');
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}


