$(document).ready(function() {
  let isOpen = false;
  function checkIsOpen(newIsOpen){
    if (newIsOpen){
      $('.header__burger,.header__menu').addClass('active');
      $('body').addClass('lock');
    } else {
      $('.header__burger,.header__menu').removeClass('active');
      $('body').removeClass('lock');
    }
  }

  $(".header__link").click(
    function(event){
      event.preventDefault();
      const targetPage = event.target.href
        .split('/')
        .at(-1)
        .split('#')[0];
      const currentPage = window.location.pathname.split('/').at(-1).split('#')[0];
      if (targetPage === currentPage){
        isOpen = false;
        checkIsOpen(isOpen);
      }
      window.location.replace(event.target.href);
    }
  )
  $('.header__burger').click(function(event) {
    isOpen = !isOpen 
    checkIsOpen(isOpen);
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
