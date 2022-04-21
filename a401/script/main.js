$(function(){
    // 팝업
    popup();
    //슬라이드
    let intervalID = setInterval(slide,3000)
    //메뉴
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