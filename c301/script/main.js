i = 0 ;
$(function(){
    // 팝업
    popup();
    // 메뉴
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