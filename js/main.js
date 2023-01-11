// 슬라이더(swiper)
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
	observer: true,
	observeParents: true,
	autoplayDisableOnInteraction: false,
});

// 슬라이드 전환 시 progresBar 애니메이션 쟈시작
mySwiper.on("slideChange", function () {
	$(".progress span").removeClass("pro-ani");
	setTimeout(() => $(".progress span").addClass("pro-ani"), 1000);
});

// 사이즈 변경 시 progressBar 애니메이션 재시작
$(window).resize(function () {
	if ($(window).width() < 1250) {
		$(".progress span").removeClass("pro-ani");
		setTimeout(() => $(".progress span").addClass("pro-ani"), 0);
	}
});
