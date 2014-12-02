// Author: easier
// Date :2014.12.02
// For: Ajiabeiya pet's weixin site


// init iscroll.js
var myScroll;
	function loaded () {
		myScroll = new IScroll('#wrapper', { 
			scrollX: false
			, freeScroll: true
			, scrollbars: true
			 });
	}
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


$(document).ready(function() {
	
	$('.page').eq(0).addClass('currentPage');


	$('#footer a').click(function(event) {
		var current=$('#footer a').index($(this));
		$('.currentPage').slideUp();
		$('.page').eq(current).addClass('currentPage').slideDown();
		return false;
	});

	// $('.page').eq(0).addClass('currentPage');
	// $('#footer a').click(function(event) {
	// 	var current = $('#footer a').index($(this));
	// 	$('.currentPage').addClass('page-moveToLeft');
	// 	$('.currentPage').removeClass('currentPage');
	// 	$('.page').eq(current).addClass('currentPage');
	// 	return false;
	// });

});

