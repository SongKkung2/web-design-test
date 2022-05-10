$(function(){
    //메뉴
    menu();
    // 모달
    modal();
    // 슬라이드
    let intervalID = setInterval(slide , 2500)
})

function modal(){
    $(".news ul li:eq(0)").click(function(){
        $("#modal").show();
    })
    $("#modal button").click(function(){
        $("#modal").hide();
    })
}
let i = 0;
function slide(){
    // if(i >= 3 ){
    //     i = 0;
    // };
    // Pos = -300*i
    // $("#items").css({
    //     marginTop: Pos
    // });
    // i++;
    if(i>=3){
        i=0
    }
    let Pos = -300*i
    $("#items").animate({
        marginTop : Pos
    });
    i++;
}
function menu(){
    $("#gnb > li").mouseenter(function(){
        // let index = $(this).index();
        // $(".header-bg").css({
        //     backgound : URL('../images/lineart0.png')
        // })
        if(!$(this).hasClass("active"))$(this).addClass("active")
        $(".header-bg").stop().animate({
            height: 200
        })
        $(".lnb").stop().slideDown();
    })
    $("#gnb > li").mouseleave(function(){
        $(this).removeClass("active")
        $(".header-bg").stop().animate({
            height: 0
        })
        $(".lnb").stop().slideUp();
    })
}