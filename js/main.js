var $topMenu = $('#main-menu'),
	$showMenuBtn = $('#show-menu');


$showMenuBtn.on('click', function(){
	if ( $topMenu.hasClass('open')){
		$topMenu.removeClass('open');
		$(this).find('span')
		       .removeClass('icon-cross')
		       .addClass('icon-menu');       
	}
	else{
		$topMenu.addClass('open');
		$(this).find('span')
		       .removeClass('icon-menu')
		       .addClass('icon-cross');  	
	}
});

$(window).resize(function(){
	if ($(window).width() > 885){
		$topMenu.removeClass('animation')
		        .removeClass('open');

		$showMenuBtn.find('span')
		       .removeClass('icon-cross')
		       .addClass('icon-menu');          
	}else{
		$topMenu.addClass('animation');
	}			
});

$topMenu.on('click', 'a', function(){
	$topMenu.removeClass('open');
	$showMenuBtn.find('span')
		       .removeClass('icon-cross')
		       .addClass('icon-menu');   
});

$(window).scroll(function(){
	if ($(this).scrollTop() > $('.btn').offset().top){
		$('.img-wrap').addClass('show');
	}
});