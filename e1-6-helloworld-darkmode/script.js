$(document).ready(function(){

	//------------------------------------
	// show hide each itme
	//------------------------------------

	$('.paragraph').click(function(){
		$(this).toggleClass('active');
	});

	//---------------------------
	// setup show hide all button
	//---------------------------
	$("#showhide").click(function(){
		
		$('.paragraph').toggleClass('active');
	});

	//------------------------------------
	// adds a a darkmode class to the body
	//------------------------------------
	$("#darkmode").click(function(){
		$('body').toggleClass('darkmode');
	});

});