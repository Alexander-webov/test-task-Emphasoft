$(function () {
    $('.features-item__top').on('click', function () {
    $(this).find('.features-item__top-arrows').toggleClass('active');
    $(this).parent('.features-item')
      .find('.features-item__descr')
      .slideToggle(700);

    });
  

   wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
  }
  )
  wow.init();
  
  if ($(window).width() < 800) {
    $('.wow').removeClass('animate__animated');

  };


  
let men=true;
$("#sandwich").click(function()
{
	if(men==false)
	{
		$(".menu").slideUp();
		men=!men;
	}
	else
	{
		$(".menu").slideDown();
		men=!men;
	}
});
  


	$("#sandwich, .menu_item").click(function() {
     $("#sandwich").toggleClass("active");
  });
  
  

  $('.partner__items').slick({
  infinite: true,
    slidesToShow: 4,
    prevArrow: false,
    nextArrow: false,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
   
  ]
  
  });




});