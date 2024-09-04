$(document).ready(function () {
	let isOpen = false;
	function checkIsOpen(newIsOpen) {
		if (newIsOpen) {
			$('.header__burger,.header__menu').addClass('active');
			$('body').addClass('lock');
		} else {
			$('.header__burger,.header__menu').removeClass('active');
			$('body').removeClass('lock');
		}
	}

	$('.header__link').click(function (event) {
		event.preventDefault();
		const targetPage = event.target.href.split('/').at(-1).split('#')[0];
		const currentPage = window.location.pathname
			.split('/')
			.at(-1)
			.split('#')[0];
		if (targetPage === currentPage) {
			isOpen = false;
			checkIsOpen(isOpen);
		}
		window.location.replace(event.target.href);
	});
	$('.header__burger').click(function (event) {
		isOpen = !isOpen;
		checkIsOpen(isOpen);
	});
});

//brideslider
$(document).ready(function () {
	$('.brideslider').slick({
		slidesToShow: 1,
		speed: 100,
		easing: 'ease',
		draggable: false,
		swipe: true,
		touchTheshold: 10,
		adaptiveHeight: true,
	});
});

//beautyslider
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);
/* Устанавливает текущий слайд */
function currentSlide(n) {
	showSlides((slideIndex = n));
}
/* Основная функция сладера */
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('beautyslider__item');
	var dots = document.getElementsByClassName('slider-dots_item');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' toactive', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' toactive';
}

//backstageslider
function onSelectImage(url) {
	document.getElementById('mainImage').src = url;
}
