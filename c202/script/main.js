$(function(){
    //1.popup
    popup();
    //2.menu
    menu();
    //3.slide
    let intervalID = setInterval(slide, 3000)
});
//팝업 
function popup(){
    $(".news ul li:eq(0)").click(function(){
        $("#popup").fadeIn();
    })
    $("#popup button").click(function(){
        $("#popup").fadeOut();
    })
}
//menu
function menu(){
    $("#gnb > li").mouseenter(function(){
        $(this).children("a").addClass("highlight");
        $(this).children(".lnb").stop().slideDown("fast");
    })
    $("#gnb > li").mouseleave(function(){
        $(this).children(".lnb").stop().slideUp("fast");
        $(this).children("a").removeClass("highlight");
    })
}

function slide(){
    let currentSlide = $(".slide > div.top");
    let nextSlide = currentSlide.next();
    if(!nextSlide.length){
        nextSlide = $(".slide > div:first")
    }
    currentSlide.removeClass("top");
    nextSlide.addClass("top");
}
