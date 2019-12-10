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


    // $('.popular-item').slick({
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   });



});

