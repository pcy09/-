var mySwiper = new Swiper(".swiper-container", {
	// Optional parameters
	loop: true,
	autoplayDisableOnInteraction: false,
	slidesPerView: 1,
	autoHeight: true,
	autoplay: {
		delay: 3000, //animation과 시간 맞춰줘야함
	},
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: "false",
		type: "bullets",
		renderBullet: function (index, className) {
			return (
				'<span class="' +
				className +
				'">' +
				"<em>" +
				"</em>" +
				"<i></i>" +
				"<b></b>" +
				"</span>"
			);
		},
	},
});
