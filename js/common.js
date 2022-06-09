//common js

//highlight
hljs.initHighlightingOnLoad();

$(document).ready(function(){
	
	//menu button
	$('.menu').bind('click',function(){
		if( $(this).hasClass('on') ){
			$(this).removeClass('on');
			$('nav').removeClass('on');
		}else{
			$(this).addClass('on');
			$('nav').addClass('on');
		}
	});
	
	//nav
	$('nav li').bind('click',function(){
		
		$('nav').removeClass('on');
		$('.menu').removeClass('on');
		
		if( $(this).index() == '0' ){
			$('html,body').animate({scrollTop:$('section#tab1').offset().top},500);
		}else if( $(this).index() == '1' ){
			$('html,body').animate({scrollTop:$('section#tab2').offset().top},500);
		}else if( $(this).index() == '2' ){
			$('html,body').animate({scrollTop:$('section#tab3').offset().top},1000);
		}
		else if( $(this).index() == '3' ){
			$('html,body').animate({scrollTop:$('section#tab4').offset().top},1000);
		}
		
	});


});
$(window).resize(function(){
	
	
});
$(window).scroll(function(){

	
});