$(document).ready(function () {


  $(".alertbox .btnclose").click(function () {
    $(".alertbox").addClass("d-none");
  });


  $(".navbar .navbar-nav .nav-item").hover(function () {
    if ($(this).find(".dropdown-menu").hasClass("show")) {
      $(this).find(".dropdown-menu").removeClass("show")
    } else {
      $(this).find(".dropdown-menu").addClass("show")
    }
  })

  if ($(".companies-slider").length){
      $('.companies-slider').slick({
        // infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1
    });
  }
 


if ($("#bottom-counter").length){
  $('#bottom-counter .value').counterUp({
    delay: 10,
    time: 2000
  });
}
 
if ($("#about-us .counter").length){
  
  $('#about-us .counter .value').counterUp({
    delay: 10,
    time: 2000
  });
}
    
});

