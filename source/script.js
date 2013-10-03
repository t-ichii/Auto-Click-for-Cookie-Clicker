function auto_click_bigCookie(){
	click_timer_bigCookie = setInterval(
		function(){
			document.getElementById('bigCookie').click();
		},
		10
	);
}
function auto_click_goldenCookie(){
	click_timer_goldenCookie = setInterval(
		function(){
			document.getElementById('goldenCookie').click();
		},
		5000
	);
}
function mod_design(){
	$("#backgroundLeftCanvas").css("display","none");
	$(".title").css("font-family","monospace");
	$(".section").css("font-family","monospace");
}
window.onload = function(){
	auto_click_bigCookie();
	auto_click_goldenCookie();
	setTimeout(function(){
		mod_design();
	},2000);
}
