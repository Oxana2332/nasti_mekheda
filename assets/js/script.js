$(document).ready(function() {
$('.header__burger').click(function(event) {
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock')

})

});
$(document).ready(function() {
    $('.beautyslider').slick({
 slidesToShow:3,
 speed:100,
 easing:'ease',
 draggable:false,
 swipe:true,
 touchTheshold:10,
 adaptiveHeight:true,
centerMode:true,
responsive: [
    {
      breakpoint: 468,
      settings: {
        slidesToShow: 1,
      }
    }]
    })
})

$(document).ready(function() {
    $('.brideslider').slick({
 slidesToShow:1,
 speed:100,
 easing:'ease',
 draggable:false,
 swipe:true,
 touchTheshold:10,
 adaptiveHeight:true,
    })
})

$(document).ready(function() {
    $('.backstageslider').slick({
 slidesToShow:1,
 speed:100,
 easing:'ease',
 draggable:false,
 swipe:true,
 touchTheshold:10,
 adaptiveHeight:true,
centerMode:true
    })
})
