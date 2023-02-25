$(function(){

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 50){
        $(".menu_bg").addClass("nav_bg")
    }else{
        $(".menu_bg").removeClass("nav_bg")
    }

    if(scrolling > 30){
        $(".back_to_top").fadeIn(500)
    }else{
        $(".back_to_top").fadeOut(500)
    }

  })

  $(".back_to_top").click(function(){
      $('html, body').animate({
          scrollTop:0
      }, 2000)
  })

    $(".banner_slick").slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        autoplay:true,
        speed:1000,
        nextArrow:".next1",
        prevArrow:".prev1"
    });

    $(".service_slick").slick({
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true,
        autoplay:true,
        speed:1000,
        vertical:true,
        centerMode: true,
        centerPadding: '0px',
        nextArrow:".next2",
        prevArrow:".prev2"
    });
    
    $('.review_second_main').slick({
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        speed:1000,
        arrows: false,
        fade: true,
        asNavFor: '.review_main'
      });

      $('.review_main').slick({
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true,
        autoplay:true,
        speed:1000,
        vertical:true,
        centerMode: true,
        centerPadding: '0px',
        nextArrow:".next3",
        prevArrow:".prev3",
        asNavFor: '.review_second_main',
        focusOnSelect: true
      });

      $('.counter').counterUp({
        delay: 10,
        time: 2000
      });

      $('.market_main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        centerMode: true,
        centerPadding: '0px',
        arrows:true,
        prevArrow:".prev",
        nextArrow:".next",
        responsive: [
        {
          breakpoint: 575.99,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              speed: 1000,
              arrows:false            
          }
        },  
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            centerMode: true,
            centerPadding: '0px',
            arrows:false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            arrows:false
          }
        }           
      ]
    });
});
