$(function(){
    // 탭
    tab();
    // 메뉴
    menu();
    // 팝업
    popup();
    // 슬라이드
    let intervalID = setInterval(slide,3000)
})
function popup(){
    $(".news-text ul li:eq(0)").click(function(){
        $("#popup").show();
    })
    $("#popup button").click(function(){
        $("#popup").hide();
    })
}
function tab(){
    $(".title div").eq(0).addClass("tab-active")
    $(".title div").click(function(){
        $(this).addClass("tab-active")
        $(this).siblings().removeClass("tab-active")
        let idx = $(this).index();
        $(".text div").eq(idx).siblings().addClass("d-none");
        $(".text div").eq(idx).removeClass("d-none");
    })
}
let i = 0
function slide(){
    if(i >= 3){
        i=0
    }
    let Pos = -1200 * i
    $("#items").animate({
        marginLeft : Pos
    })
    i++;
}
function menu(){
    $("#gnb li").mouseenter(function(){
        $(this).addClass("gnblight")
        $(".lnb").stop().slideDown();
        $(".header-bg").stop().animate({
            height : 200
        })
    })
    $("#gnb li").mouseleave(function(){
        $(this).removeClass("gnblight")
        $(".lnb").stop().slideUp();
        $(".header-bg").stop().animate({
            height : 0
        })
    })
    $(".lnb li").mouseenter(function(){
        $(this).addClass("highlight")
    })
    $(".lnb li").mouseleave(function(){
        $(this).removeClass("highlight")
    })
}
