$(function () {

    $("#top-navigation .nav-item:not(.active)").mouseenter(function () { 
        $("#top-navigation .nav-item.active").css("background","none")
    });
    $("#top-navigation .nav-item").mouseleave(function () { 
        $("#top-navigation .nav-item.active").css("background","#1c7bd6")
    });

    $(".navbar").css({"background-image":"url('assets/images/top-nav-bg.png')","background-repeat":"no-repeat","background-size":"cover"})
    $("#top-navigation").css({"background":"none"})

    $("#contact-us-cards .card").mouseenter(function () { 
        $(this).css({"transition" : "all .5s ease-out",
            "transform": "scale(1.1)"});
    });
    $("#contact-us-cards .card").mouseleave(function () { 
        $("#contact-us-cards .card").css({"transition" : "all .5s ease-out",
            "transform": "scale(1)"});
    });
     
});