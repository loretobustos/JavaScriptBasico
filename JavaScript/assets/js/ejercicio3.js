window.onload = () => {
    function respuesta(resultado) {
        if (resultado < 0) {
            resultado = 0;
        }
        document.querySelector(".resultado").innerHTML = resultado;
    }
    let botonSumar = document.getElementById("btn-sumar");
    botonSumar.onclick = function suma() {
        var numero1 = parseInt(document.getElementById("valor1").value);
        var numero2 = parseInt(document.getElementById("valor2").value);
        var resultadoSuma = numero1 + numero2;
        respuesta(resultadoSuma);
    }

    let botonRestar = document.getElementById("btn-restar");
    botonRestar.onclick = function resta() {
        var numero1 = parseInt(document.getElementById("valor1").value);
        var numero2 = parseInt(document.getElementById("valor2").value);
        var resultadoResta = numero1 - numero2;
        respuesta(resultadoResta);
    }
}