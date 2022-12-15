if (window.matchMedia("(min-width: 860px)").matches) {
	$(".slider-content")
		.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false,
			dots: true,
			appendDots: $(".sold__cars-slider-arrows"),
			arrows: true,
			appendArrows: $(".sold__cars-slider-arrows"),
		})
		.on("beforeChange", function (e, slide, current, next) {
			if (next >= 10) {
				$(".sold__start-btn").addClass("sold__start-btn--active");
			} else {
				$(".sold__start-btn").removeClass("sold__start-btn--active");
			}
			$(".sold__start-btn").on("click", function () {
				$(".slider-contentt").slick("slickGoTo", 0);
			});
		});

	$(".slider-content").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		appendDots: $(".sold__cars-slider-arrows"),
		arrows: true,
		appendArrows: $(".sold__cars-slider-arrows"),
	});
	$(".sold .other__car-items")
		.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: true,
			infinite: false,
			appendDots: $(".other__cars-slider-arrows"),
			arrows: true,
			appendArrows: $(".other__cars-slider-arrows"),
		})
    .on("beforeChange", function (e, slide, current, next) {
			if (next >= 9) {
				$(".sold__start-btn").addClass("sold__start-btn--active");
			} else {
				$(".sold__start-btn").removeClass("sold__start-btn--active");
			}
			$(".sold__start-btn").on("click", function () {
				$(".other__car-items").slick("slickGoTo", 0);
			});
		});
} else if(window.matchMedia("(min-width: 600px)").matches) {
	$(".slider-content")
		.slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: false,
			dots: true,
			appendDots: $(".sold__cars-slider-arrows"),
			arrows: true,
			appendArrows: $(".sold__cars-slider-arrows"),
		})
		.on("beforeChange", function (e, slide, current, next) {
			if (next >= 11) {
				$(".sold__start-btn").addClass("sold__start-btn--active");
			} else {
				$(".sold__start-btn").removeClass("sold__start-btn--active");
			}
		});
	$(".sold__start-btn").on("click", function () {
		$(".slider-content").slick("slickGoTo", 0);
	});

	$(".slider-content").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		appendDots: $(".sold__cars-slider-arrows"),
		arrows: true,
		appendArrows: $(".sold__cars-slider-arrows"),
	});
} else{
	$(".slider-content")
	.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		appendDots: $(".sold__cars-slider-arrows"),
		arrows: true,
		appendArrows: $(".sold__cars-slider-arrows"),
	})
	.on("beforeChange", function (e, slide, current, next) {
		if (next >= 11) {
			$(".sold__start-btn").addClass("sold__start-btn--active");
		} else {
			$(".sold__start-btn").removeClass("sold__start-btn--active");
		}
	});
	$(".sold__start-btn").on("click", function () {
		$(".slider-content").slick("slickGoTo", 0);
	});

	$(".slider-content").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		appendDots: $(".sold__cars-slider-arrows"),
		arrows: true,
		appendArrows: $(".sold__cars-slider-arrows"),
	});
}
