$(document).ready(function(){
	$('.carousel').slick({
		autoplay:true,
		autoplaySpeed:5000,
		speed:500,
		arrows:true,
		infinite:true
	});
	$('#similarGoods').slick({
		autoplay:false,
		speed:600,
		arrows:true,
		infinite:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll:1
	});
	$('#anotherGoods_slider').slick({
		autoplay:false,
		speed:600,
		arrows:true,
		infinite:true,
		dots:true,
		slidesToShow:5,
		slidesToScroll:5
	});

	let tabWidth = $('#descriptionTrigger').innerWidth();
	$('.bottom_bar').css('width', tabWidth);

	$('#descriptionTrigger').click(function(){
		$('.tabs_wrap').addClass('active');
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#descriptionTab').addClass('active');
		let tabWidth = $('#descriptionTrigger').innerWidth();
		let leftPosition = $('#descriptionTrigger').position().left;
		$('.bottom_bar').css({'width': tabWidth, 'left':leftPosition});
	});
	$('#cardTrigger').click(function(){
		$('.tabs_wrap').removeClass('active');
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#cardTab').addClass('active');
		let tabWidth = $('#cardTrigger').innerWidth();
		let leftPosition = $('#cardTrigger').position().left;
		$('.bottom_bar').css({'width': tabWidth, 'left':leftPosition});
	});
	$('#certificatesTrigger').click(function(){
		$('.tabs_wrap').removeClass('active');
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#certificatesTab').addClass('active');
		let tabWidth = $('#certificatesTrigger').innerWidth();
		let leftPosition = $('#certificatesTrigger').position().left;
		$('.bottom_bar').css({'width': tabWidth, 'left':leftPosition});
	});
	$('#priceTrigger').click(function(){
		$('.tabs_wrap').removeClass('active');
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#priceTab').addClass('active');
		let tabWidth = $('#priceTrigger').innerWidth();
		let leftPosition = $('#priceTrigger').position().left;
		$('.bottom_bar').css({'width': tabWidth, 'left':leftPosition});
	});
});