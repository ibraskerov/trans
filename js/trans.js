
$(document).ready(function(){
	$(".header-nav a ").click(function(){
		var clickedBtn = $(this).attr("href");
		var finish = $(clickedBtn).offset().top;
		$("html, body").animate({scrollTop:finish},600);
		return false;
		
	});
});