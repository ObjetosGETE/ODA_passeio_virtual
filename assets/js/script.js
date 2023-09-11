
$('.left').click(function(){
    $('.inicio').fadeOut()
    $('.wrapper').css('background-position-x', '90%')
    window.setTimeout(function(){$('.conteudo').fadeIn()}, 2750)
    window.setTimeout(function(){
        $('.modal-btn-1').fadeIn()
    }, 3250)
    window.setTimeout(function(){
        $('.modal-btn-2').fadeIn()
    }, 3500)
    window.setTimeout(function(){
        $('.modal-btn-3').fadeIn()
    }, 3750)
})
$('.right').click(function(){
    $('.wrapper').css('background-position-x', '0%')
})

$('.modal-btn-1').click(function(){
    $('.modal-custom').fadeOut()
    $('.modal-1').fadeIn()
})
$('.modal-btn-2').click(function(){
    $('.modal-custom').fadeOut()
    $('.modal-2').fadeIn()
})
$('.modal-btn-3').click(function(){
    $('.modal-custom').fadeOut()
    $('.modal-3').fadeIn()
})