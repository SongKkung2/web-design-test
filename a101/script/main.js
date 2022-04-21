let i = 0
$(function(){
    // 팝업
    modal();
    //탭
    tabs();
    //슬라이드
    let intervalID = setInterval(carousel,3000)
    carousel();
    //메뉴
    mainNav();
})
function modal() {
    $(".news li:eq(0)").click(function(){
        $("#modal").fadeIn();
    })
    $("#modal  button").click(function(){
        $("#modal").fadeOut();
    })
}
function tabs(){
    $(".board-title a:first").addClass("active")
    $(".board-title a:first").click(function(){
        $(this).addClass("active")
        $(this).siblings().removeClass("active")
        $(".gallery").hide();
        $(".news").show();
    })
    $(".board-title a:last").click(function(){
        $(this).addClass("active")
        $(this).siblings().removeClass("active")
        $(".news").hide();
        $(".gallery").show();
    })
}
function carousel(){
    if( i >= 3){
        i = 0
    }
    let yPos = -300 * i;
    $("#items").css({
        marginTop: yPos
    });
    i++;
    
}
function mainNav(){
    // 메인 내비게이션 항목에 마우스가 닿으면 서브 메뉴를 모두 or 하나만 ? 펼친다.
    // 모두 > lnb 전체가 펼쳐지기
    // 개인 > 해당 lnb 만 펼쳐지기
    $("#gnb > li").mouseenter(function(){
        $(this).children("a").addClass("on")
        $(".lnb").stop().slideDown();
    })
        //$(this).children(".lnb") > 하나만
    $("#gnb > li").mouseleave(function(){
        $(this).children("a").removeClass("on")
        $(".lnb").stop().slideUp();
    })
    $(".lnb > li").mouseenter(function(){
        $(this).children("a").addClass("sub")
    })
    $(".lnb > li").mouseleave(function(){
        $(this).children("a").removeClass("sub")
    })
}
