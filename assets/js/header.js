$(function () {

    $("#top-navigation .nav-item").mouseenter(function () { 
        $("#top-navigation .nav-item.active").css("background","none")
    });
    $("#top-navigation .nav-item").mouseleave(function () { 
        $("#top-navigation .nav-item.active").css("background","#1c7bd6")
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 20) {
            $(".togglebtn").css("color", "black");
            $('.navbar').removeClass('navbar-dark');
            $('.navbar').addClass('navbar-light bg-light');
            // $(".navbar").css("margin-top", "0vh")
        } else {
            $(".togglebtn").css("color", "black");
            $('.navbar').removeClass('bg-light');
            $('.navbar').addClass('navbar-light');
            // $(".navbar").css("margin-top", "3vh")
        }
    });
});