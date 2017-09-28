$(document).ready(function(){

	/* Sticky Navigation */
	$('.js--section-features').waypoint(function(direction) {
		if (direction === 'down') {
			$('nav').addClass('sticky');
		}else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	});


	var type = new Typed('#type', {
		strings: [ '^900 Good bye, junk food! ^500 <br> Hello super healthy meals.`'
		],
		typeSpeed: 75,
    	backSpeed: 0
	});
	

	/* Scroll On Buttons - Hungry */
	$('.js--scroll-to-plans').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
	});
	/* Scroll On Buttons - More  */
	$('.js--scroll-to-start').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
	});

	/* Navigation scroll */
	    $(function() {
	      $('a[href*=\\#]:not([href=\\#])').click(function() {
	        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	          var target = $(this.hash);
	          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	          if (target.length) {
	            $('html,body').animate({
	              scrollTop: target.offset().top
	            }, 1000);
	            return false;
	          }
	        }
	      });
	    });

	    /* Animations On Scroll - Delivery */
	    $('.js--wp-1').waypoint(function(direction) {
	    	$('.js--wp-1').addClass('animated fadeIn');
	    }, {
	    	offset: '50%'
	    })
	    /* Animations On Scroll - Works */
	    $('.js--wp-2').waypoint(function(direction) {
	    	$('.js--wp-2').addClass('animated fadeInUp');
	    }, {
	    	offset: '50%'
	    })
	    /* Animations On Scroll - Cities */
	    $('.js--wp-3').waypoint(function(direction) {
	    	$('.js--wp-3').addClass('animated fadeIn');
	    }, {
	    	offset: '50%'
	    })
	    /* Animations On Scroll - Sign Up */
	    $('.js--wp-4').waypoint(function(direction) {
	    	$('.js--wp-4').addClass('animated pulse');
	    }, {
	    	offset: '50%'
	    })

	    /* Mobile Navigation */
	    $('.js--nav-icon').click(function(){
	    	var nav = $('.js--main-nav');
	    	var icon = $('.js--nav-icon i');

	    	nav.slideToggle(200);
	    	if (icon.hasClass('ion-navicon-round')) {
	    		icon.addClass('ion-close-round');
	    		icon.removeClass('ion-navicon-round');
	    	} else {
	    		icon.addClass('ion-navicon-round');
	    		icon.removeClass('ion-close-round');

	    	}

	    	ion-close-round
	    });




});
