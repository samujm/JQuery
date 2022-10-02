//Codigo jquery
$(document).ready(function(){
    //Codigo js
    // console.log('Funcionando');

    //---------------CON JQUERY
    //Seleccionar elementos a traves de etiquetas
    $('h1').html('Etiqueta h1');
    //Seleccionar elementos a traves de clases
    $('.display-4').html('desde clase');
    //Seleccionar elementos a traves de id
    $('#idh1').html('desde id');

    //---------------CON JS
    document.querySelector('h1').innerHTML = 'Etiqueta h1';
    document.querySelector('.display-4').innerHTML = 'desde clase';
    document.querySelector('#idh1').innerHTML = 'desde id';

    //Seleccionando todos los h1 que estan dentro de container
    //$('.container h1').html('cambio de texto');
    //$('.container h1:first').html('cambio de texto');
    //$('.container h1:last').html('cambio de texto');
});
