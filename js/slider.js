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



