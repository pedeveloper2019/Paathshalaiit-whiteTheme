$(function () {
    $("#top-toggle").click(function (e) { 
        // e.preventDefault();
        $(".navCollapse").slideUp()
        $(".slideDiv").slideToggle();
    });
    $("#navCollapsebtn").click(function (e) { 
        // e.preventDefault();
        $(".slideDiv").slideUp();
        $(".navCollapse").slideToggle();
    });
    header = $("#slider").height()
    var path = $(location).attr('pathname');
    if(path.includes("index.html")){
        $(window).scroll(function () { 
            if ($(window).scrollTop() >= header) {
                // $(".togglebtn").css("color","black");
                // $(".navbar").css("margin-top","0vh")
                $(".navbar").css({"background-image":"url('assets/images/top-nav-bg.png')","background-repeat":"no-repeat","background-size":"cover"})
                $("#top-navigation").css("background","none")
            }
            else {
                $(".togglebtn").css("color","white");
                $(".navbar").css("background","transparent")
                $("#top-navigation").css("background-image","url('assets/images/top-nav-bg.png')")
                // $(".navbar").css("margin-top","3vh")
            }
        });
    }
   
    // alert($(window).width())
    if(!($(window).width() < 990))
    {
        $(".card").click(function (e) {
        data_for = $(this).attr("data-for");
        data = $(this).find(".card-infobox").html();
        if(data_for == 1)
        {
            position = $(this).attr("pos-to");
            $(".arrow").css({"display":"none"})
            $(".infobox").css({"display":"none"})
            $(".arrow1").css({"display":"block"})
            $(".infobox1").css({"display":"block"}).text(data)
            // alert(data)
            $(".arrow1").css({
                left: position,
            })
            $(this).parent().parent().parent().mouseleave(function(){
                $(".arrow").css({"display":"none"})
                $(".infobox").css({"display":"none"})
            }) 
        }
        else 
        if(data_for == 2)
        {
            position = $(this).attr("pos-to");
            $(".arrow").css({"display":"none"})
            $(".infobox").css({"display":"none"})
            $(".arrow2").css({"display":"block"})
            $(".infobox2").css({"display":"block"}).text(data)
            // alert(data)
            $(".arrow2").css({
                left: position,
            })
            $(this).parent().parent().parent().mouseleave(function(){
                $(".arrow").css({"display":"none"})
                $(".infobox").css({"display":"none"})
            }) 
        }
        else
        if(data_for == 3)
        {
            $(".arrow").css({"display":"none"})
            $(".infobox").css({"display":"none"})
            $(".arrow3").css({"display":"block"})
            $(".infobox3").css({"display":"block"}).text(data)
            position = $(this).attr("pos-to");
            // alert(position)
            $(".arrow3").css({
                left: position,
            })
            $(this).parent().parent().parent().mouseleave(function(){
                $(".arrow").css({"display":"none"})
                $(".infobox").css({"display":"none"})
            }) 
        }
        else
        {
            $(".arrow").css({"display":"none"})
            $(".infobox").css({"display":"none"})
            $(".arrow4").css({"display":"block"})
            $(".infobox4").css({"display":"block"}).text(data)
            position = $(this).attr("pos-to");
            // alert(position)
            $(".arrow4").css({
                left: position,
            })
            $(this).parent().parent().parent().mouseleave(function(){
                $(".arrow").css({"display":"none"})
                $(".infobox").css({"display":"none"})
            }) 
        }
        });
    }
    else
    {
        $(".card").click(function (e) 
        { 
            // alert()
            data = $(this).find(".card-infobox").html();
            // alert(data);
            infobox = $(this).next(".responsive-infobox")
            $(infobox).text(data)
            $(infobox).slideToggle()
        });
    }
});