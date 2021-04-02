/*Banderas*/
// sirven como señales, en donde la bandera capturar nos dira si podemos hacer algo o no, ´pueden ser variables o funciones las banderas
// se puede definir una bandera con un return
var capturar = false;

/*Variables globales*/
// la variable de tabledata que va a ser un string y se pone vacia
var alumnos = [];
var calificaciones = [];
var posicion = 0;
var tableData = "";
var definicion;

/*Elementos*/

// variables que se ocupan para programar las funciones de los botones
// BOTONES
var buttonGuardar = document.getElementById("btnGuardar");
var buttonLimpiar = document.getElementById("btnLimpiar");
var buttonCapturar = document.getElementById("btnCapturar");

// DIV
var infoBox = document.getElementById("info");

// INPUT
var textNombre = document.getElementById("nombre");
var textCalificacion = document.getElementById("calificacion");

var tableBody = document.getElementById("data");

/*Eventos globales*/
buttonCapturar.addEventListener("click", function() {

    capturar = !capturar;
    capturaInformacion();

});

buttonLimpiar.addEventListener("click", function() {

    textNombre.value = '';
    textCalificacion.value = '';

});

buttonGuardar.addEventListener("click", function() {

    if (textNombre.value.length > 0 && textCalificacion.value.length > 0) {
        alumnos[posicion] = textNombre.value;
        calificaciones[posicion] = textCalificacion.value;
        if (textCalificacion.value == 10) {
            tableData += `
            <tr>
                <td>${posicion+1}</td>
                <td>${alumnos[posicion]}</td>
                <td>${calificaciones[posicion]}</td>
                <td class="btn btn-outline-primary">Sobresaliente</td>
            </tr>
        `;

            tableBody.innerHTML = tableData;
        }
        if (textCalificacion.value == 9) {
            tableData += `
            <tr>
                <td>${posicion+1}</td>
                <td>${alumnos[posicion]}</td>
                <td>${calificaciones[posicion]}</td>
                <td class="btn btn-outline-success">Excelente</td>
            </tr>
        `;

            tableBody.innerHTML = tableData;
        }

        if (textCalificacion.value >= 6 && textCalificacion.value <= 8) {
            tableData += `
            <tr>
                <td>${posicion+1}</td>
                <td>${alumnos[posicion]}</td>
                <td>${calificaciones[posicion]}</td>
                <td class="btn btn-outline-warning">Aceptable</td>
            </tr>
        `;

            tableBody.innerHTML = tableData;
        }

        if (textCalificacion.value < 6) {
            tableData += `
            <tr>
                <td>${posicion+1}</td>
                <td>${alumnos[posicion]}</td>
                <td>${calificaciones[posicion]}</td>
                <td class="btn btn-outline-danger">Reprueba</td>
            </tr>
        `;

            tableBody.innerHTML = tableData;
        }

        posicion++;

    } else {
        alert("Ingrese información válida")
    }

    textNombre.value = '';
    textCalificacion.value = '';
    console.log(alumnos);
    console.log(calificaciones);
});



/*Funciones*/
// si se da click en boton capturar se muestra los input, si se da de nuevo click se dejan de mostrar, empieza en el html con d-none
// despues se cambia la clase de primary 
// en la linea 87 donde dice buttoncapturar.innerHTML esta inyectando nuevo html a ese botón en cuando se le de click
// doble negacion se convierte en verdadero
function capturaInformacion() {

    if (capturar) {

        infoBox.classList.remove("d-none");
        infoBox.classList.add("d-block");
        buttonCapturar.classList.remove("btn-outline-primary");
        buttonCapturar.classList.add("btn-outline-danger");
        buttonCapturar.innerHTML = "Dejar de capturar";

    } else if (!capturar) {

        infoBox.classList.remove("d-block");
        infoBox.classList.add("d-none");
        buttonCapturar.classList.remove("btn-outline-danger");
        buttonCapturar.classList.add("btn-outline-primary");
        buttonCapturar.innerHTML = "Capturar";

    }

}