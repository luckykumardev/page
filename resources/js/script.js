 $(document).ready(function(){
	/*  for sticky navigation  */
$('.js--section-features').waypoint(function(direction){
	if(direction=='down'){
		$('nav').addClass('sticky');
	} else {
		$('nav').removeClass('sticky');
	}      
 },{
 	offset: '60px;'
 });


/*   Scroll on buttons  */

$('.js--scroll-to-plans').click(function(){
	$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
 
   });



$('.js--scroll-to-start').click(function(){
	$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
 
   });


/* navigation  (SMOOTH SCROLL JQUEARY PLUGIN)*/
    
    $(function(){
    	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 2000);
            return false;
        }
    }
        
        });
    });


    /*      Animation on scroll      */

    $('.js--wp-1').waypoint(function(){
      $('.js--wp-1').addClass('animated fadeIn');
    }, {

    	offset:'50%'
    });
     
     $('.js--wp-2').waypoint(function(){
      $('.js--wp-2').addClass('animated fadeInUp');
    }, {

    	offset:'50%'
    });

     $('.js--wp-3').waypoint(function(){
      $('.js--wp-3').addClass('animated fadeIn');
    }, {

    	offset:'50%'
    });

     $('.js--wp-4').waypoint(function(){
      $('.js--wp-4').addClass('animated pulse');
    }, {

    	offset:'50%'
    });


});


$('#imgs').imageScroll({
  orientation:"left",
  speed:600,
  interval:1000,
  hoverPause:true,
  callback:function(){
    var ordinal = $(this).find("img").first().attr("src");

    $(this).next("span").text("CallbackDisplay: hidden "+ordinal+"!");
  }
});

