$(document).ready(function(){
    calificacion()
});

var opcion;

function menu() {
    console.log("Elige una opción");
    console.log("1. Edad de moy");
    console.log("2. Nombre de moy");
    console.log("3. Lugar de nacimiento de Moy");

    opcion =  Number(prompt("Elige una opción"));

    switch(opcion){
        case 1:
            console.log("26");
            break;
        case 2:
            console.log("Moises ");
            break
        case 3:
            console.log("Aguascalientes");
        default:
            console.log("Introduce una opcion");
            break;
    }
}


function saludar() {
    var saludar= "si";

    do {
        console.log("hola");
        saludar= prompt("saludar otra vez?");

    }
    while (saludar== "si");
}








     
    function calificacion(){
    do {
    otra = prompt("quieres poner otra?");
    calif = Number(prompt("Digita tu calificación"));
   
    if (calif <= 5) {
        console.log("estas reprobado");

    } else if (calif > 5 ) {
        console.log("Estas aprobado");

    }

   
    }  while(otra == "si"); 

    
   
}














//  function eval(calif){
  
//    console.log("Elige");
//    console.log("4. Estas reprobado");
//    console.log("7. Pasaste");
//    console.log("10. Excelente");
  
   
//     do {
        
    
       
//     switch(calif) {
//         case 4:
//         console.log("Estas reprobado");
//         break;
//         case 7:
//         console.log("Pasaste");
//         break;
//         case 10:
//         console.log("Excelente");
//         break;
//         }
//         otra = prompt("quieres poner otra?");
//         calif = Number(prompt("Digite su calificación"));
//     }while  (otra == "si");

// } 
   

 
 

