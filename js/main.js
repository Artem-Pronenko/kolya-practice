const form = $('.invite__form');
const blanck = $('.container');
const success = $('#success-messages');
let animationTime = 500;
let timeReturn = 3000;

$(document).ready(function () {
  $('.benefit-slider').slick({
    slideToShow: 1,
    arrows: false,
    slidesPerRow: 1,
    dots: true,
    dotsClass: 'top-dots',
    appendDots: $('.top-dots')
  });

  $(document).ready(function () {
    $('.slider').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      dotsClass: 'my-dots',
      appendDots: $('.my-dots')
    });
  });
  /* выпадашка */
  $(function () {
    $('#nav_list').hover(function () {
      $('#nav_list').children('ul').stop(false, false).fadeIn(200);
      $('#submenu').css('display', 'flex', 'justify-content', 'space-around');
      $('#nav_list').addClass('#submenu a');
    },
      function () {
        $(this).children('ul').stop(false, true).fadeOut(200);
        $('#nav_list').children('a').removeClass('#submenu a');
      });
  });
  $(function () {
    $('#nav_list2').hover(function () {
      $('#nav_list2').children('ul').stop(false, false).fadeIn(200);
      $('#submenu').css('display', 'flex', 'justify-content', 'space-around');
      $('#nav_list2').addClass('#submenu a');
    },
      function () {
        $(this).children('ul').stop(false, true).fadeOut(200);
        $('#nav_list2').children('a').removeClass('#submenu a');
      });
  });
  /* табы */
  $(".tab_item").not(":first").hide();
  $(".wrapper .tab").click(function () {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

  $(document).ready(function () {
    $('.tabb1').click(function () {
      $(".tab__info1").css("display", "inline-block");
      $(".tab__info2").hide();
      $(".tab__info3").hide();
      $(".tab__info4").hide();
    });
    $('.tabb2').click(function () {
      $(".tab__info2").css("display", "inline-block");
      $(".tab__info1").hide();
      $(".tab__info3").hide();
      $(".tab__info4").hide();
    });
    $('.tabb3').click(function () {
      $(".tab__info3").css("display", "inline-block");
      $(".tab__info2").hide();
      $(".tab__info1").hide();
      $(".tab__info4").hide();
    });
    $('.tabb4').click(function () {
      $(".tab__info4").css("display", "inline-block");
      $(".tab__info1").hide();
      $(".tab__info2").hide();
      $(".tab__info3").hide();
    });
  });

  /* бургер меню подпункты */
  $(".menu__showsub").click(function () {
    $(".menu__showsub2").toggle();
    $(".menu__showsub3").toggle();
    $(".menu__showsub4").toggle();
    $(".menu__showsub5").toggle();
    $(".menu__showsub6").toggle();
  })

  const blanckTop = blanck.offset().top;
  $(window).bind('scroll', function () {
    const windowTop = $(this).scrollTop();
    if (windowTop > blanckTop) {
      $('.nav__showmenu').html('<h6 class="burger">&#9776;</h6>')
      $(window).unbind('scroll')
    }
  });

  $('#inviteButton').click(function () {
    $('.modal2').show();
    $('.modal-btn').click(function () {
      $('.modal2').hide();
    });
  });
  $('.button-success__navbar').click(function () {
    $('.modal').show();
    $('.modal-btn').click(function () {
      $('.modal').hide();
    });
  });

});
