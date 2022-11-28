/**
 * Estas son las variables creadas para las funciones de la aplicación web.
 * La variable boton, la usaremos en myFunction.
 * La variable acosador, la usaremos en eventListenner
 */

let boton = $("#cambio");
let acosador = document.createElement("h5");
document.body.appendChild(acosador);

/**
 * Esta función la usamos para ocultar el texto h1 al inicializar la página.
 */

$("h1").hide();

/**
 * Con esta función añadiremos una utilidad a un botón para habilitar clases de estilo a nuestra web, además 
 * de mostrar el texto oculto de h1.
 * Adicionalmente si volvemos a hacer click de nuevo en el botón volverá a desaparecer el estilo y ocultar el h1.
 * También cambiará el texto del botón en función de si tiene añadido el estilo o no.
 */

function myFunction() {
  var element = $("#guapo");
  if (element.hasClass("article")) {
    element.removeClass("article");
    boton.html("Hazme Guapo");
    $("h1").hide();
  } else {
    element.addClass("article");
    boton.html("Hazme Feo");
    $("h1").show();
  }
}

/**
 * Este es el evento que hace que se muestre por pantalla la posición del ratón en tiempo real.
 * Al principio conseguí hacerlo que se mostrase en un punto fijo del html, pero despúes quise ir mas allá
 * y conseguí añadirlo con un seguimiento al propio ratón incorporandole estilos.
 */

addEventListener("mousemove", (event) => {
  acosador.innerText = `Eje X: ${event.screenX} | Eje Y: ${event.clientY}`;
  acosador.style.top = event.clientY + "px";
  acosador.style.left = event.clientX + "px";
  $("#ejex").html(event.pageX);
  $("#ejey").html(event.pageY);
});

/**
 * Esta es una función de JQuery añadida, con la cual consigo mostrar y ocultar un texto usando JQuery Callback.
 * Además he utilizado el mismo método de la primera función para hacer que el botón cambie de texto, según si
 * el texto está oculto o no.
 */

$(document).ready(function () {
  $("#hambre").click(function () {
    if ($("#comida").hasClass("digerido")) {
      $("#comida").show("slow", function () {
        alert("buuuuhhh... Puaj!");
      });
      $("#comida").removeClass("digerido");
      $("#hambre").html("Tengo Hambre");
    } else {
      $("#comida").hide("slow", function () {
        alert("Ñam Ñam Ñam");
      });
      $("#comida").addClass("digerido");
      $("#hambre").html("Échalo Fuera");
    }
  });
});
