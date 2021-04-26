$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  

  // alert 
  $('#enviarCorreo').click(function(){
    alert("El correo fue enviado correctamente")
  });

  //cambio de color con método on

  $("body").on('dblclick', 'h4', function(){
    $(this).css("color", "red");
  });

// toggle

$('.card-title').click(function(){
  $('.card-text').toggle();
})

});