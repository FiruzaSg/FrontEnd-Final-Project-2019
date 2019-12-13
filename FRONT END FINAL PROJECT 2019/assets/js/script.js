$(document).ready(function () {

  // Alert Top Message

  $(".alertbox .btnclose").click(function () {
    $(".alertbox").addClass("d-none");
  });


  //Navbar Scroll

  $(window).scroll(function () {
    var a = $(this).scrollTop();
    if (a >=100) {
      $('.navbar').addClass('fixed-top');
    }else{
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


  // Categories Slider

  if ($(".companies-slider").length) {
    $(".companies-slider").slick({
      arrows:false,
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
});
