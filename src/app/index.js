jQuery(document).ready(function(){

	$('.click').click(function(){
		  $('#burger').toggleClass('active');
		 
		  if ($('#burger').hasClass('active')) {
		  		$( '.menu' ).width('400px');
		  		$('.txt').css('transform','translateX(400px)');
		  		$('.button').css('transform','translateX(130px)');
		  		$('li').show();

		  		setTimeout(function(){	
				    $('li').css('opacity','1');
				    $('li').css('transform','translateY(0px)');
			  	}, 200);
			}
			
			else {
				$( '.menu' ).width('0px');
				$('.txt').css('transform','translateX(0px)')
				$('.button').css('transform','translateX(0px)');
				$('li').css('opacity','0');
				$('li').css('transform','translateY(-40px)');
        	setTimeout(function(){	
            $('li').hide();
          }, 500);
        
			}
		  return false;
	});
});