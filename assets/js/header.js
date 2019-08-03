$(function () {

    $("#top-navigation .nav-item:not(.active)").mouseenter(function () { 
        $("#top-navigation .nav-item.active").css("background","none")
    });
    $("#top-navigation .nav-item").mouseleave(function () { 
        $("#top-navigation .nav-item.active").css("background","#1c7bd6")
    });
     $(".navbar").css({"background-image":"url('assets/images/top-nav-bg.png')","background-repeat":"no-repeat","background-size":"cover"})
});