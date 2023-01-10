/* a href='#' 클릭 무시 */
$('a[href="#"]').click(function (ignore) {
	ignore.preventDefault();
});

// 언어버튼 클릭 시 언어 선택 메뉴 보이기
$(".lang").click(function () {
	$(this).children("ul").removeClass("hide");
});

// 외부영역 선택하면 언어 선택 메뉴 닫기
$(document).mouseup(function (e) {
	let langUl = $(".lang ul");
	if (langUl.has(e.target).length === 0) {
		langUl.addClass("hide");
	}
});

// 언어 클릭하면 해당 언어 메뉴 스타일 변경
$(".lang ul li").click(function () {
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
});

// 스크롤하면 헤더 스타일 변경
$(window).scroll(function () {
	if ($(window).scrollTop() >= 400) {
		$("header").addClass("scroll");
	} else {
		$("header").removeClass("scroll");
	}
});

// 햄버거 버튼 클릭하면 메뉴 보이기
$("a.ham").click(function () {
	$(this).toggleClass("active");
	$("ul.moGnb").toggleClass("hide");
	// 스크롤바 숨기고 동작안하게 했다가 풀기
	$("header").toggleClass("active");
	if ($("header").hasClass("active")) {
		$("header").on("scroll touchmove mousewheel", function (event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
	} else {
		$("header").off("scroll touchmove mousewheel");
	}
	$("body").toggleClass("scrollBar");
});

// 모바일 그룹메뉴 클릭하면 메뉴 보이기
$("ul.moGnb>li").click(function () {
	$(this).children("ul").toggleClass("hide");
	$(this).children("span").toggleClass("active");
});

// 윈도우 사이즈가 바뀔 때 모바일메뉴 초기화
$(window).resize(function () {
	if ($(window).width() > 1023) {
		$("a.ham").removeClass("active");
		$("ul.moGnb").addClass("hide");
		$("header").off("scroll touchmove mousewheel");
		$("body").removeClass("scrollBar");
		$("ul.moGnb>li").children("ul").addClass("hide");
		$("ul.moGnb>li").children("span").removeClass("active");
	}
});
