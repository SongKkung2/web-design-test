i = 0;
$(function(){
    modal();
    // 모달
    // 슬라이드
    let intervalID = setInterval(slide , 3000)
    // 메뉴
    menu();
})
function modal(){
    $(".news ul li:eq(0)").click(function(){
        $("#modal").show();
    })
    $("#modal button").click(function(){
        $("#modal").hide();
    })
}
function slide(){
    if(i >= 3){
        i = 0
    };
    let Pos = -800 * i 
    $("#slides").css({
        marginLeft : Pos
    });
    i++;
    
}
function menu(){
    $("#gnb li").mouseenter(function(){
        if(!$(this).hasClass("active"))$(this).addClass("active");
        $(this).children(".lnb").stop().slideDown();
        let Pos = $(this).index();
        $(this).children(".lnb").css({
            top : 50 * Pos
        })
    })
    $("#gnb li").mouseleave(function(){
        $(this).removeClass("active");
        $(this).children(".lnb").stop().slideUp();
    })
}