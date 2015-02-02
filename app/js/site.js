// Author: easier
// Date :
// For: 


$(document).ready(function() {

	//首页图片比例
	function setImg() {
		var indImgWidth = $('.slide img').width();
		var indImgHeight= indImgWidth * 0.78725;

		$('.slide img').height(indImgHeight);
	}
	setImg();
	$(window).resize(function(event) {
		setImg();
	});
	

	//我的钱包 
	$('.radio a').click(function() {
		var index=$(this).index();

		$('.radio a').removeClass('curr');
		$(this).addClass('curr');
		var data=$(this).data('value');
		alert(data);

		if (index==0) {
			$('.account').slideUp();
		} else{
			$('.account').slideDown();
		};

		return false;
	});

	// 弹出框
	var h1=$(document).height();
	var h2=$(window).height();
	var h=h1+80;

	$('#popBg').height(h);

	$('#popBtn').click(function() {
		$('#popBg').css('display', 'block');
		$('#scroller').height(h);
			var h3=$('#popWrapper').height();
			var t=h2/2-h3/2;

		$('#popWrapper').css('top', t);
		return false;
	});

	$('.close').click(function() {
		$('#popBg').hide();
	});

	//增加页面高度
	$('#addGapFooter input').focus(function() {
		$('.gapFooter').eq(1).css('marginBottom', '160px');
	});
	$('#addGapFooter input').blur(function() {
		$('.gapFooter').eq(1).css('marginBottom', '50px');
	});


	//关于我们和Q&A
	$('.tab a').click(function() {
		var index=$('.tab a').index(this);

		$('.tab a').removeClass('curr');
		$(this).addClass('curr');
		
		if (index==0) {
			$('.gywm').show();
			$('.qa').hide();
		} else{
			$('.gywm').hide();
			$('.qa').show();
		};

		return false;
	});

});
