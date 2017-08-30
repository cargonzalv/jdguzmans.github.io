/* global $ */

function main () {
  $('.nav li').click(function () {
    $('.nav li').removeClass('active')

    var $this = $(this)

    if (!$this.hasClass('active')) {
      $this.addClass('active')
      console.log(this)
    }
  })

  $('.navbar-brand').click(function () {
    $('.nav li').removeClass('active')
    $('#homeNav').addClass('active')
  })

  $(window).on('scroll', function () {
    $('.container').each(function () {
      if ($(window).scrollTop() >= $(this).offset().top) {
        $('.nav li').removeClass('active')
        var id = $(this).attr('id')
        console.log(id)
        if (id === undefined) console.log(this)
        $('#' + id + 'Nav').addClass('active')
      }
    })
  })
}

$(document).ready(main)
