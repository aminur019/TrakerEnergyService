$(window).on("load", function () {

	// Preload
	$("#preload").fadeOut(500);
	
 });
 
 jQuery(document).ready(function () {
 
    // Carousel Services
	$('.init-carousel').owlCarousel({
	   loop: true,
	   margin: 20,
	   nav: false,
	   dots: true,
	   responsive: {
		  0: {
			 items: 1
		  },
		  600: {
			 items: 2
		  },
		  1000: {
			 items: 2
		  }
	   }
	});
 
	// Counter 
	$('.counter').counterUp({
	   delay: 10,
	   time: 1000
	});
 
	// Carousel Project
	$('.carousel-project').owlCarousel({
	   loop: true,
	   margin: 20,
	   nav: false,
	   responsive: {
		  0: {
			 items: 1
		  },
		  600: {
			 items: 2
		  },
		  1100: {
			 items: 4
		  }
	   }
	});
 
	// Accordion 
	$('.wrapper-accordion .content-accordion:first-of-type').show();
	$('.wrapper-accordion h3:first-of-type').children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');
 
	var titleAccordion = $('.wrapper-accordion h3');
	var contentAccordion = $('.content-accordion');
 
 
	titleAccordion.click(function () {
	   var content = $(this).next(contentAccordion);
	   if (content.is(':visible')) {
		  content.slideUp();
		  $(this).children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
	   } else {
		  contentAccordion.slideUp();
		  content.slideDown();
		  titleAccordion.children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		  $(this).children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');
	   }
 
	});
 
	// Scroll Top
	$('#scroll-top').click(function () {
	   $('body,html').animate({
		  scrollTop: 0
	   }, 800);
	   return false;
	});
	$('#scroll-top').hide();
	$(window).scroll(function () {
	   if ($(this).scrollTop() > 50) {
		  $('#scroll-top').fadeIn();
	   } else {
		  $('#scroll-top').fadeOut();
	   }
	});
 
	// Scroll Menu
	$(".menu").on("click", "a", function (event) {
	   event.preventDefault();
	   var id = $(this).attr('href'),
		  top = $(id).offset().top;
	   $('body,html').animate({
		  scrollTop: top
	   }, 1500);
	});
	$(".logo").on("click", function (event) {
	   event.preventDefault();
	   var id = $(this).attr('href'),
		  top = $(id).offset().top;
	   $('body,html').animate({
		  scrollTop: top
	   }, 1500);
	});
 
	// Mobile Menu
	$("#openmenu").click(function (event) {
	   event.preventDefault();
	   $("#nav").animate({
		  'left': 0
	   }, 500);
	});
	$("#closemenu").click(function (event) {
	   event.preventDefault();
	   $("#nav").animate({
		  'left': '-320px'
	   }, 500);
	});
	$(".menu li a, .logo").on("click", function (event) {
	   event.preventDefault();
	   $("#nav").animate({
		  'left': '-320px'
	   }, 500);
	});

	// Ajax Send Request
	$('#send-request').click(function(event){
          event.preventDefault();
		 var name  = $('input[name="name"]').val();
		 var phone = $('input[name="phone"]').val(); 
		 var type  = $('select[name="type"]').val();
		 var load  = $('select[name="load"]').val();

		 if(name == '' || phone == '') {
			$('.res-request').fadeIn().html('<span class="error">All fields must be filled.</span>');
            $('input').focus(function () {
            $('.res-request').fadeOut();
         });
		 }
		 else {
			$.ajax({
                url: '../request.php',
                type: 'POST',
				data: {
					name:  name,
					phone: phone,
					type:  type,
					load:  load
				 },
				 dataType: 'html',
				 success: function(data) {
                    if(data == 'Send') {
						$('.res-request').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');
                        $('input[name="name"]').val('');
                        $('input[name="phone"]').val('');
					}
				 }
			}); // ajax
		 }

	}); 

	// Ajax Contact Form
	$('#send-contact-form').click(function(event) {
        event.preventDefault();

		var name_contact     = $('input[name="name_contact"]').val();
		var email            = $('input[name="email"]').val();
		var subject          = $('input[name="subject"]').val();
		var message          = $('textarea[name="message"]').val();

		if(name_contact == '' || phone == '' || subject == '' || message == '' || email == '') {
			$('.res').fadeIn().html('<span class="error">All fields must be filled.</span>');
            $('input, textarea').focus(function () {
            $('.res').fadeOut();
		})
	    }
		else {
           $.ajax({
			 url: '../contact.php',
			 type: 'POST',
			 data: {
				name_contact: name_contact ,
				email:         email,
				subject:       subject,
				message:       message
			 },
			 dataType: 'html',
			 success: function(data) {
				if(data == 'Send') {
					$('.res').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');
                    $('input[name="name_contact"]').val('');
                    $('input[name="email"]').val('');
					$('input[name="subject"]').val('');
					$('textarea[name="message"]').val('');
				}
			 }
		   });
		}

	});

	 // Scroll Fixed Menu
	 $(window).scroll(function() {
		var headerTop = $('.top-header').height();
		if ($(this).scrollTop() >= headerTop) {
			$('.fixed-scroll').addClass('fixed');
		} else {
			$('.fixed-scroll').removeClass('fixed');
		}
	  });
 
 
 }); // ready