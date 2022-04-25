$(function(){
    // 팝업
    popup();
    //슬라이드
    let intervalID = setInterval(slide,3000)
    //메뉴
    menu();
})
function popup(){
    $(".news ul li:eq(0)").click(function(){
        $("#popup").show();
    })
    $("#popup button").click(function(){
        $("#popup").hide();
    })
}
function slide(){
    let currItem = $("#items li.top");
    let nextItem = currItem.next();
    if(!nextItem.length) nextItem = $("#items li:first")
    currItem.removeClass("top")
    nextItem.addClass("top")
}
function menu(){
    // 메인메뉴 li에 마우스 닿으면 하이라이트 + 서브메뉴 부드럽게 펼치기
    $("#gnb > li").mouseenter(function(){
        if(!$(this).hasClass("active"))$(this).addClass("active");
        $(".header-bg").stop().animate({
            height: 150
        });
        $(".lnb").stop().slideDown();
    })
    $("#gnb > li").mouseleave(function(){
        $(this).removeClass("active")
        $(".header-bg").stop().animate({
            height: 0
        });
        $(".lnb").stop().slideUp();
    })
}