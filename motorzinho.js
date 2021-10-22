var estadoLiquificadora = "apagada";
var sonidoLiquificadora = document.getElementById("blender-sound");
var botonLiquificador = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");


function controllerLiquificador() {
    if (estadoLiquificadora == "apagada") {
        estadoLiquificadora = "encendida";
        prendeApaga();
        licuadora.classList.add("active");
        /*console.log("me prendiste");*/
    } else {
        estadoLiquificadora = "apagada";
        prendeApaga();
        licuadora.classList.remove("active");
        /*console.log("me apagaste");*/
    }
}

function prendeApaga() {
    if ( sonidoLiquificadora.paused ) {
        botonLiquificador.play();
        sonidoLiquificadora.play();
    } else {
        botonLiquificador.play();
        sonidoLiquificadora.pause();
        sonidoLiquificadora.currentTime = 0; /*reinicia el audio*/
    }
}
