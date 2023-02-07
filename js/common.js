var ww = $(window).width()
if (ww>950) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

$('.depth1').on('mouseover mouseout', function(){
    if ($('html').hasClass('pc')){
        $(this).next().toggleClass('on')
    }
})

$('#header #nav .depth1 > li').hover(
    function(){
        if ( $('html').hasClass('pc')) {
            $(this).addClass('on')
        }
    }, 
    function(){
        if ( $('html').hasClass('pc')) {
            $(this).removeClass('on')
        }
    }
)

$('.navopen').click(function(){
    $(this).toggleClass('on')
    $(this).next().toggleClass('on')
})

$('.depth1 > li > a').click(function(){
   if ($('html').hasClass('mobile')) {
    $(this).next().stop().slideToggle()
    return false
   }
})
