import data from "./db.js";
let dataArr = data;
let list;
let text = "";
let thirdText = "";
let fifthText = "";

function secondArticle() {
	for (let i = 1; i < 5; i++) {
		text += `							<article>
    <div class="imgWrap">
      <a href="#">
        <img
          src="${list[i].img}"
          alt="이미지"
        />
      </a>
    </div>
    <div class="textWrap">
      <a href="#">
      ${
				Array.isArray(list[i].subTitle)
					? list[i].subTitle
							.map((item) =>
								item == "보도자료"
									? `<p class="category gray">${item}</p>`
									: item == "기술"
									? `<p class="category navy">${item}</p>`
									: item == "사람&문화"
									? `<p class="category blue">${item}</p>`
									: item == "지속가능경영"
									? `<p class="category green">${item}</p>`
									: `<p class="category">${item}</p>`,
							)
							.join("")
					: list[i].subTitle == "보도자료"
					? `<p class="category gray">${list[i].subTitle}</p>`
					: list[i].subTitle == "기술"
					? `<p class="category navy">${list[i].subTitle}</p>`
					: list[i].subTitle == "사람&문화"
					? `<p class="category blue">${list[i].subTitle}</p>`
					: list[i].subTitle == "지속가능경영"
					? `<p class="category green">${list[i].subTitle}</p>`
					: `<p class="category">${list[i].subTitle}</p>`
			}
      </a>
      <a href="#">
        <h2 class="title">
          ${list[i].title}
        </h2>
      </a>
    </div>
  </article>`;
	}
}
function thirdArticle() {
	for (let i = 5; i < 13; i++) {
		thirdText += `							<article>
    <div class="imgWrap">
      <a href="#">
        <img
          src="${list[i].img}"
          alt="이미지"
        />
      </a>
    </div>
    <div class="textWrap">
      <a href="#">
      ${
				Array.isArray(list[i].subTitle)
					? list[i].subTitle
							.map((item) =>
								item == "보도자료"
									? `<p class="category gray">${item}</p>`
									: item == "기술"
									? `<p class="category navy">${item}</p>`
									: item == "사람&문화"
									? `<p class="category blue">${item}</p>`
									: item == "지속가능경영"
									? `<p class="category green">${item}</p>`
									: `<p class="category">${item}</p>`,
							)
							.join("")
					: list[i].subTitle == "보도자료"
					? `<p class="category gray">${list[i].subTitle}</p>`
					: list[i].subTitle == "기술"
					? `<p class="category navy">${list[i].subTitle}</p>`
					: list[i].subTitle == "사람&문화"
					? `<p class="category blue">${list[i].subTitle}</p>`
					: list[i].subTitle == "지속가능경영"
					? `<p class="category green">${list[i].subTitle}</p>`
					: `<p class="category">${list[i].subTitle}</p>`
			}
      </a>
      <a href="#">
        <h2 class="title">
          ${list[i].title}
        </h2>
      </a>
    </div>
  </article>`;
	}
}
function fifthArticle() {
	for (let i = 13; i < 15; i++) {
		fifthText += `							<article>
    <div class="imgWrap">
      <a href="#">
        <img
          src="${list[i].img}"
          alt="이미지"
        />
      </a>
    </div>
    <div class="textWrap">
      <a href="#">
      ${
				Array.isArray(list[i].subTitle)
					? list[i].subTitle
							.map((item) =>
								item == "보도자료"
									? `<p class="category gray">${item}</p>`
									: item == "기술"
									? `<p class="category navy">${item}</p>`
									: item == "사람&문화"
									? `<p class="category blue">${item}</p>`
									: item == "지속가능경영"
									? `<p class="category green">${item}</p>`
									: `<p class="category">${item}</p>`,
							)
							.join("")
					: list[i].subTitle == "보도자료"
					? `<p class="category gray">${list[i].subTitle}</p>`
					: list[i].subTitle == "기술"
					? `<p class="category navy">${list[i].subTitle}</p>`
					: list[i].subTitle == "사람&문화"
					? `<p class="category blue">${list[i].subTitle}</p>`
					: list[i].subTitle == "지속가능경영"
					? `<p class="category green">${list[i].subTitle}</p>`
					: `<p class="category">${list[i].subTitle}</p>`
			}
      </a>
      <a href="#">
        <h2 class="title">
          ${list[i].title}
        </h2>
      </a>
    </div>
  </article>`;
	}
}

function contentLoad() {
	$(".firstContent").html(`
  <article>
  <div class="imgWrap">
    <a href="#">
      <img
        src="${list[0].img}"
        alt="이미지"
      />
    </a>
  </div>
  <div class="textWrap">
    <a href="#">
      ${
				Array.isArray(list[0].subTitle)
					? list[0].subTitle
							.map((item) =>
								item == "보도자료"
									? `<p class="category gray">${item}</p>`
									: item == "기술"
									? `<p class="category navy">${item}</p>`
									: item == "사람&문화"
									? `<p class="category blue">${item}</p>`
									: item == "지속가능경영"
									? `<p class="category green">${item}</p>`
									: `<p class="category">${item}</p>`,
							)
							.join("")
					: list[0].subTitle == "보도자료"
					? `<p class="category gray">${list[0].subTitle}</p>`
					: list[0].subTitle == "기술"
					? `<p class="category navy">${list[0].subTitle}</p>`
					: list[0].subTitle == "사람&문화"
					? `<p class="category blue">${list[0].subTitle}</p>`
					: list[0].subTitle == "지속가능경영"
					? `<p class="category green">${list[0].subTitle}</p>`
					: `<p class="category">${list[0].subTitle}</p>`
			}
      
    </a>
    <a href="#">
      <h2 class="title">
        ${list[0].title}
      </h2>
      <p class="text">
${list[0].text}
      </p>
    </a>
  </div>
</article>
`);
	text = "";
	secondArticle();
	$(".secondContent").html(text);
	thirdText = "";
	thirdArticle();
	$(".thirdContent").html(thirdText);
	fifthText = "";
	fifthArticle();
	$(".fifthContent").html(fifthText);
}

$("ul.category li").click(function () {
	$("ul.category li").removeClass("active");
	$(this).addClass("active");
	let categoryName = $(this).text();
	if ($(".sort .recent").hasClass("active")) {
		list = dataArr.filter(function (item) {
			if (item.category === categoryName && item.sort === "최신") {
				return true;
			}
		});
	}
	if ($(".sort .popular").hasClass("active")) {
		list = dataArr.filter(function (item) {
			if (item.category === categoryName && item.sort === "인기") {
				return true;
			}
		});
	}
	contentLoad();
});

// 최신순/인기순 체크박스 효과
$(".sort label").change(function () {
	$(".sort label").removeClass("active");
	$(this).addClass("active");
	let sort = $(this).text().trim();
	let category = $("ul.category li.active").text();
	list = dataArr.filter(function (item) {
		if (item.category === category && item.sort === sort) {
			return true;
		}
	});
	console.log(list);
	contentLoad();
});

// const sample = dataArr.filter(arr);
// console.log(sample);
// `<p>${list[0].title}</p>`
