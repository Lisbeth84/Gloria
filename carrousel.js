var img=document.getElementById('image'),
    prev=document.getElementById('prev'),
    next=document.getElementById('next');

var url_base='/';
    //VARIABLES GLOBALES para controlar imágenes

var can=5,
        pos=1

    //EVENTOS (escucha al evento click del boton prev)
prev.addEventListener('click', function(){
            //disminuye la posición de laimagen a mostrar
             pos--;
            //si la pos es menor que el primero
             if(pos<1)
             pos=5;
            //muestra la imagen según la posición
            img.src=url_base + pos + '.jpg';

    })

next.addEventListener('click', function(){
    //aumentra la posición de la imagen a mostrar
    pos++
    if(pos>5)
        pos=1;
    //muestra la imagen según la posición
    img.src=url_base + pos +'.jpg';
})

setInterval(function(){
    next.click ();
},2100)