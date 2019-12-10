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





});

