let imagenes = ["./imagenes/museo de noche.png",
                "./imagenes/museo de noche 2.png",
                "./imagenes/WhatsApp Image 2023-06-07 at 20.09.43.jpeg",
                "./imagenes/maqueta del fuerte.png"
               ];
document.Imagen.src = imagenes [0];
let flechaAnterior = document.querySelector(".flechaant");
let flechaSiguiente = document.querySelector(".flechasig");
let contador = 0;
flechaAnterior.addEventListener("click", moverIzquierda)
flechaSiguiente.addEventListener("click", moverDerecha)
setInterval(() => { moverAutomatico()},5000 );
function moverDerecha(){
    contador++;
    if(contador > imagenes.length - 1)
    {
        contador = 0
    }
    document.Imagen.src = imagenes [contador]
}

function moverIzquierda(){
    contador--;
    if(contador < 0)
    {
        contador = imagenes.length - 1;
    }
    document.Imagen.src = imagenes [contador]
}

function moverAutomatico(){
    contador++;
    if(contador > imagenes.length - 1)
    {
        contador = 0
    }
    document.Imagen.src = imagenes [contador]
}

// let tamanioImagenes = document.querySelector('#img')

// // Función para cambiar el tamaño de la imagen
// function cambiarTamañoImagen() {
//   // Verifica el ancho de la ventana
//   var anchoVentana = window.innerWidth; 
//   // Si el ancho de la ventana es menor que un valor específico (por ejemplo, 600 píxeles), cambia el tamaño de la imagen
//   if (anchoVentana < 600) {
//     tamanioImagenes.style.height = "200px"
//     tamanioImagenes.style.width = "400px"; // Cambia el ancho de la imagen a 200 píxeles (ajústalo según tus necesidades)
//   } else {
//     tamanioImagenes.style.height = "550px"
//     tamanioImagenes.style.width = "1000px"; // Restablece el ancho de la imagen a 400 píxeles (ajústalo según tus necesidades)
//   }
// }
// // Asocia el evento resize a la función cambiarTamañoImagen
// window.addEventListener("resize", cambiarTamañoImagen);
// // Llama a la función por primera vez para ajustar el tamaño inicial de la imagen
// cambiarTamañoImagen();

