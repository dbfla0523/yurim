//메뉴슬라이드 완료//
$(function () {
	$("nav > ul > li.p").hover(
		function () {
			$(this).find(".sub").stop().slideDown(300);
			$(this).children("a").addClass("over");
		},
		function () {
			$(this).find(".sub").stop().slideUp(300);
			$(this).children("a").removeClass("over");
		}
	);
});


//뉴아이템 슬라이드 완료//

$(function () {
	var distance = 0;

	$(".new .controller li").click(function (e) {
		e.preventDefault();
		$(".new .controller li").removeClass("on");
		$(this).addClass("on");

		distance = $(this).index() * 1300 * (-1);

		$(".new .picture ul").css({
			left: distance
		});
	});
});






// 인그리 버튼 완료//
$(function () {
	var n = 0;

	$("#ingre_sub1 > div.ingre_label > ul > li").click(function (e) {
		e.preventDefault();
		console.log("hi");
		$("#ingre_sub1 > div.ingre_label > ul > li").removeClass("on");
		$(this).addClass("on");
		n = $(this).index();
		console.log(n);

		$("#ingre_sub1 > div.ingre_slide > ul > li").removeClass("active");
		$("#ingre_sub1 > div.ingre_slide > ul > li").eq(n).addClass("active");
	});
});


//인그리2 슬라이드
$(function () {
	var distance = 0;

	$(".ingre_slide_controller li").click(function (e) {
		e.preventDefault();
		$(".ingre_slide_controller li").removeClass("on");
		$(this).addClass("on");

		distance = $(this).index() * 345 * (-1);

		$(".ingre_slide_wrap_top ul").css({
			left: distance
		});
	});
});


//하트버튼 토글 완료
$(".tog").click(function () {
	$(this).children("img").toggle();
});




// //장바구니 누르면 팝업띄우기
$(function () {
	$(".pop").click(function (e) {
		e.preventDefault();
		$(".layer_pop").show();
		$(".transparent").show();
		// $(".layer_pop .close").attr({"tabindex":0});
		$(".layer_pop .close").focus();
	});
	$(".transparent, .layer_pop .close").click(function (e) {
		e.preventDefault();
		$(".layer_pop").hide();
		$(".transparent").hide();
		$(".pop").focus();
	});
	$(".join_step li").click(function (e) {
		e.preventDefault();
		$(".join_step li").removeClass("on");
		$(this).addClass("on");
	});
	$(".join_step li a").focusin(function () {
		$(".join_step li").removeClass("on");
		$(this).parent().addClass("on");
	});
});