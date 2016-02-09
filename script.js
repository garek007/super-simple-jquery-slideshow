$(document).ready(function(){
$('.inlineSlideshow').find('img:first-child').show();
	
$('.forarrow').click(function(){
			var lastImage = $(this).parent().prev().find('img:last-child');
			if(lastImage.is(":visible")!= true){
       
				 if($(this).parent().prev().find('.active').length == 0){//slideshow has not been initiated, no active class exists

					var img = $(this).parent().prev().find('img:first-child');
					img.next().addClass('active');
					img.next().fadeIn();	 
				 }else{
					var img = $(this).parent().prev().find('.active');
					img.next().fadeIn();
					img.next().addClass('active');
					img.removeClass('active');
								 
				 }		
				}
		});
		
		
	$('.backarrow').click(function(){
			 var secondImage = $(this).parent().prev().find('img:first-child').next();
       if(secondImage.is(":visible")== true){
				 if($(this).parent().prev().find('.active').length == 0){//slideshow has not been initiated, no active class exists
						//do nothing 
				 }else{
					var img = $(this).parent().prev().find('.active');
					img.prev().addClass('active');
					img.fadeOut('fast');
					img.removeClass('active');
								 
				 }		
			 }
		});
    
$(window).scroll(function(){
	$('.inlineSlideshow').each(function(){
			if(isScrolledIntoView(this)){
				loadImages(this);
			}
		});
	;
});



});
function loadImages(slideshow){
	$(slideshow).children().each(function(){
		var dataSrc = $(this).data('src');
		$(this).attr('src',dataSrc);
		})
}
