$(function(){
  
	$(".nav_btn").click(function(){
		$(".topnav").slideToggle();
		if($('html').hasClass('noscroll')){
			$('html').removeClass('noscroll');
		}else{
			$('html').addClass('noscroll');
		}
	});
  
	$(".lang_btn").click(function(){
		$(".toplang").slideToggle();
		if($('html').hasClass('noscroll')){
			$('html').removeClass('noscroll');
		}else{
			$('html').addClass('noscroll');
		}
	});

	$(window).scroll(function(){
		if($(document).scrollTop()>$(".header").height()){
			$(".header").addClass('headers');
		}else{
			$(".header").removeClass('headers');
		}
	});
	
	var PC = $(window).width() > 1024, MOBILE = $(window).width() <= 750;
	if(PC){
		
		$('.toplang .t').click(function(){
			$(this).siblings('.m').slideToggle();
		});
		
	}
	
	$(".help_left .item .t").click(function(){
		if($(this).parents('.item').hasClass('item_show')){
			$(this).parents('.item').removeClass('item_show');
			$(this).siblings('.m').slideUp();
		}else{
			$(this).parents('.item').addClass('item_show');
			$(this).siblings('.m').slideDown();
		}
	});
	
	$(".plat_box5_tit ul li").click(function(){  
		$(this).siblings().removeClass('on').end().addClass('on');
		$('.plat_box5_con').hide();
		$('.plat_box5_con').eq($(this).index()).show();
	});
  
});

function showEtip(title){
	$('body').append('<div class="etip">'+title+'</div>');
	$('.etip').show().delay(3000).hide(0);
	setTimeout(function(){
		$('.etip').remove();
	},4000);
}