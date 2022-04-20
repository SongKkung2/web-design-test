let i = 0
$(function(){
    // 팝업
    modal();
    //탭
    tabs();
    //슬라이드
    let intervalID = setInterval(carousel,3000)
    carousel();
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