$(function () {

    // $("#top-navigation .nav-item:not(.active)").mouseenter(function () { 
    //     $("#top-navigation .nav-item.active").css("background","none")
    // });
    // $("#top-navigation .nav-item").mouseleave(function () { 
    //     $("#top-navigation .nav-item.active").css("background","#1c7bd6")
    // });
    // $("#top-navigation .nav-item.active").mouseenter(function () { 
    //     $(this).css("background","#1c7bd6")
    // });
    $("#contact-us-cards .card").mouseenter(function () { 
        $(this).css({"transition" : "all .5s ease-out",
            "transform": "scale(1.1)"});
    });
    $("#contact-us-cards .card").mouseleave(function () { 
        $("#contact-us-cards .card").css({"transition" : "all .5s ease-out",
            "transform": "scale(1)"});
    });
    var path = $(location).attr('pathname');
    // alert(x)
    if(!path.includes("index.html"))
    {
        // alert("not index")
        $(".navbar").css({"background-image":"url('assets/images/top-nav-bg.png')","background-repeat":"no-repeat","background-size":"cover"})
        $("#top-navigation").css({"background":"none"})
    }
    
    $('a[href*="'+path.substring(1)+'"]').each(function() {
        // alert($(this).parent())
        $(this).addClass("active")
        $(this).parent(".nav-item").addClass("active")
        $(this).parent().siblings(".nav-link").parent().addClass("active")
        // alert('Contains question mark');
    });
     
});