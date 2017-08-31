/* global $ */
//ce.gonzalez13: sería bueno usar "use strict" para evitar problemas de hoisting y evitar que js permita cosas que no debería
function main () {
  $('.nav li').click(function () {
    $('.nav li').removeClass('active')

    var $this = $(this)

    if (!$this.hasClass('active')) {
      $this.addClass('active')
    }
  })
  //ce.gonzalez13: agregar documentación
  $('.navbar-brand').click(function () {
    $('.nav li').removeClass('active')
    $('#homeNav').addClass('active')
  })
  //ce.gonzalez13: agregar documentación
  $(window).on('scroll', function () {
    $('.container').each(function () {
      if ($(window).scrollTop() >= $(this).offset().top) {
        $('.nav li').removeClass('active')
        var id = $(this).attr('id')
        $('#' + id + 'Nav').addClass('active')
      }
    })
  })
}

$(document).ready(main)
