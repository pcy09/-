$(".lang").click(function () {
	$(this).children("ul").removeClass("hide");
});

$(document).mouseup(function (e) {
	let langUl = $(".lang ul");
	if (langUl.has(e.target).length === 0) {
		langUl.addClass("hide");
	}
});

$(".lang ul li").click(function () {
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
});
