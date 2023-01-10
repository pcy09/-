var mySwiper = new Swiper(".mySwiper", {
	speed: 1000,
	loop: true,
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 7000,
		disableOnInteraction: false,
	},
	pagination: {
		clickable: true,
		el: ".swiper-pagination",
		type: "bullets",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

mySwiper.on("slideChange", function () {
	$(".progress span").removeClass("pro-ani");
	setTimeout(() => $(".progress span").addClass("pro-ani"), 1000);
});
