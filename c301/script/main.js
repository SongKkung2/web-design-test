i = 0 ;
$(function(){
    // 팝업
    popup();
    // 메뉴
    menu();
    // 슬라이드
    let intervalID =setInterval(slide , 3000)
})
function popup(){
    $(".news-text li:eq(0)").click(function(){
        $("#popup").fadeIn();
    })
    $("#popup button").click(function(){
        $("#popup").fadeOut();
    })
}

function slide(){
    if(i >=3 ){
        i = 0
    }
    let Pos = -800 * i;
  $(".items").css({
      marginLeft : Pos 
  });
  i++;  
}
function menu(){
    $(".gnb > li").mouseenter(function(){
        if(!$(this).hasClass("active"))$(this).addClass("active");
        $(this).children(".lnb").stop().slideDown();
        var Pos = $(this).index();
        $(this).children(".lnb").css({
            top : Pos * 50
        })
    })
    $(".gnb > li").mouseleave(function(){
        $(this).removeClass("active");
        $(this).children(".lnb").stop().slideUp();
    })
}