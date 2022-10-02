//Codigo jquery
$(document).ready(function(){
    //Codigo js
    // console.log('Funcionando');

    //---------------CON JQUERY
    //Seleccionar elementos a traves de etiquetas
    //$('h1').html('Etiqueta h1');
    //Seleccionar elementos a traves de clases
    //$('.display-4').html('desde clase');
    //Seleccionar elementos a traves de id
    //$('#idh1').html('desde id');

    //---------------CON JS
    //document.querySelector('h1').innerHTML = 'Etiqueta h1';
    //document.querySelector('.display-4').innerHTML = 'desde clase';
    //document.querySelector('#idh1').innerHTML = 'desde id';

    //Seleccionando todos los h1 que estan dentro de container
    //$('.container h1').html('cambio de texto');
    //$('.container h1:first').html('cambio de texto');
    //$('.container h1:last').html('cambio de texto');

    //Agregar clases
    $('#idh1').addClass('text-danger');
    //Quitar clase
    $('#idh1').removeClass('display-4');

    $('#contenido').append('<h1>Este es un elemento al final</h1>');
    $('#contenido').prepend('<h1>Este es un elemento al principio</h1>');

    //propiedad css
    $('#color-azul').css('color', 'blue');
    //Colocar más propiedades css al mismo tiempo
    $('#color-azul').css({color:'blue', background: 'salmon', padding: '20px'});

    //Con remove desaparece completamente el elemento
    $('#color-azul').remove();
    //Con hide no aparece en la pagina pero si en html, con la propiedad none
    $('#color-azul').hide();

    //atributos 
    $('img').attr('src', 'https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png');
    $('img:last').attr('width','50');


});
