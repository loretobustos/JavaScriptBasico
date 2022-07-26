function limpiar() {
    document.querySelector(".mensajeEnviado").innerHTML = "";
    document.querySelector(".errordatos").innerHTML = "";
    document.querySelector(".errorasunto").innerHTML = "";
    document.querySelector(".errormensaje").innerHTML = ""
}

function exito() {
    document.querySelector(".mensajeEnviado").innerHTML = "Mensaje enviado con éxito !!!";
}

function validar(nombre, asunto, mensaje) {
    let pasamosLaValidación = true;
    let expresion = /[a-zA-Z]\w+/;
    if (nombre == "" || expresion.test(nombre) == false) {
        document.querySelector(".errordatos").innerHTML = "El nombre es requerido y no debe contener números."
        pasamosLaValidación = false;
    }
    if (asunto == "" || expresion.test(asunto) == false) {
        document.querySelector(".errorasunto").innerHTML = "El asunto es requerido y no debe contener números."
        pasamosLaValidación = false;
    }
    if (mensaje == "" || expresion.test(mensaje) == false) {
        document.querySelector(".errormensaje").innerHTML = "El mensaje es requerido y no debe contener números."
        pasamosLaValidación = false;
    }
    return pasamosLaValidación;
}
let form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    limpiar();
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    let mensajeEnviado = validar(nombre, asunto, mensaje);

    if (mensajeEnviado == true) {
        exito();
    }
})