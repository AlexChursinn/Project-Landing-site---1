$(function() {

	var header = $("#header"),
	introH = $("#intro").innerHeight(),
	scrollOffset = $(window).scrollTop(); /* в эту переменную сохраним высоту интро блока и хедора и создадим скрол равный $(window).scrollTop() это текущий скрол страницы при загрузке */


	/* Fixed Header */
	checkScroll(scrollOffset); /* вызываем нашу функцию сразу как только зашли на страницу */

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset); /* При скроле будем вызывать эту функцию и получать scrollOffset */

	});

	function checkScroll(scrollOffset) {

		if( scrollOffset >= introH ) { /* Если скрол больше высоты интро то добавляем для шапки задался класс фиксед */
		header.addClass("fixed");
	} else {
		header.removeClass("fixed"); /* иначе убираем фиксед */
	}

	}

	/* Smooth scroll Плавный скролл к элементам */
	$("[data-scroll").on("click", function(event) {
		event.preventDefault();

		var $this = $(this), 
				blockId = $this.data('scroll'),
		    blockOffset = $(blockId).offset().top; /* $(this) при клике вытаскиваем эелемент и помещаем в .data('scroll') 
				blockOffset = $(blockId).offset().top; получаем позицию этого элемента от верха страницы в пикселях до него*/

				$("#nav a").removeClass("active"); /* У всех сылок в нав убрать класс эктив */
				$this.addClass("active"); /* Для ссылки на которую нажали зададим класс эктив */


		$("html, body").animate({
				scrollTop: blockOffset /* сколкьо нужно проскролить плавно */
		}, 500); /* 500 параметр миллисекунд */

	});     /* $("[data-scroll") Будем наблюдать за дата скорл элементов, on("click", function(event) при клике вызваем функцию, event.preventDefault() отменеят дефолтное поведение наших ссылок */

/* Menu nav toggle */ /* БУРГЕР МЕНЮ ПОЯВЛЕНИЕ И ИСЧЕЗНОВЕНИЕ ЕЁ */

	$("#nav-toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active"); /* При нажатии выдает эктив бурегеру и появляется крестик */
		$("#nav").toggleClass("active"); /* при нажатии на бургер у нава поялвется эктив и выплывает меню */
	})

/* COllapse */ /* Акардион раскрываем-закрываем */
$("[data-collapse]").on("click", function(event) {
	event.preventDefault();

	var $this = $(this), 
	blockId = $this.data('collapse'); 

	$this.toggleClass("active"); 
});

/* Slider */
$("[data-slider]").slick({
	infinite: true,  /* бесконечный */
	fade: false,
	slidesToShow: 1, /* сколько слайдов показыватьи  сколько скролить */
  slidesToScroll: 1 /* сколько слайдов показыватьи  сколько скролить */
});

});