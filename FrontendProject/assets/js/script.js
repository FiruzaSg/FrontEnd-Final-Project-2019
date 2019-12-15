$(document).ready(function () {

  // Alert Top Message

  $(".alertbox .btnclose").click(function () {
    $(".alertbox").addClass("d-none");
  });


  //Navbar Scroll

  $(window).scroll(function () {
    var a = $(this).scrollTop();
    if (a >= 100) {
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('fixed-top');
    }
  });


  // Navbar Dropdown menu

  $(".navbar .navbar-nav .nav-item").hover(function () {
    if (
      $(this)
        .find(".dropdown-menu")
        .hasClass("show")
    ) {
      $(this)
        .find(".dropdown-menu")
        .removeClass("show");
    } else {
      $(this)
        .find(".dropdown-menu")
        .addClass("show");
    }
  });

  $('i.new').click(function () {
    if ($(this).hasClass('fa-search')) {
      $(this).removeClass('fa-search').addClass('fa-times');
    } else {
      $(this).addClass('fa-search').removeClass('fa-times');
    }

  })


  // Categories Slider

  if ($(".companies-slider").length) {
    $(".companies-slider").slick({
      arrows: false,
      accessibility: false,
      slidesToShow: 6,
      slidesToScroll: 1
    });
  }


  // About Us Counter

  if ($("#about-us .counter").length) {
    $("#about-us .counter .value").counterUp({
      delay: 10,
      time: 1000
    });
  }


  // Bottom Counter

  if ($("#bottom-counter").length) {
    $("#bottom-counter .value").counterUp({
      delay: 10,
      time: 2000
    });
  }


  $('.card').mouseenter(function () {
    $('.card .main-slider-overlay ul').css({ "top": "105px" });

  });
  $('.card').mouseleave(function () {
    $('.card .main-slider-overlay ul').css({ "top": "240px" });
  });


  $('.students-slider').slick({
    arrows: false,
    accessibility: false,

    slidesToShow: 2,
    slidesToScroll: 1
  });

  $('.clients-slider').slick({
    arrows: false,
    accessibility: false,

    slidesToShow: 6,
    slidesToScroll: 1
  });

  $('.card').mouseenter(function () {
    $('.card .blog-overlay ul').css({ "top": "80px" });

  });
  $('.card').mouseleave(function () {
    $('.card .blog-overlay ul').css({ "top": "240px" });
  });



  $(".portfolio-item").isotope({
    itemSelector: ".item",
    layoutMode: "fitRows"
  });
  $(".portfolio-menu ul li").click(function () {
    console.log(true);

    $(".portfolio-menu ul li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $(".portfolio-item").isotope({
      filter: selector
    });
    return false;
  });



  


});
