$(function(){
    // 팝업 작성 - 열기 닫기
    popup();
    // 탭 - 팝업에 사용한 메소드를 재사용(팝업 응용)
    tab();
    // 메뉴(사이트맵)
    menu();
    // 캐러셀(이미지슬라이드)
    let intervalID = setInterval(slide,3000)
    slide();
    
})
function slide(){
    let currItem = $("#items li.top")
    let nextItme = currItem.next();
    if(!nextItme.length) nextItme =$("#items li:first");
    currItem.removeClass("top");
    nextItme.addClass("top")
}
function menu(){
    //자식요소 선택하는 css vs children("li")
    $(".menu > li").mouseenter(function(){ //마우스 올렸을때
        $(this).css("border","1px solid #4295ea")
        $(this).children("a").addClass("on");
        $(this).children(".submenu").stop().slideDown("fast");
    }); 
    $(".menu > li").mouseleave(function(){ //마우스 치웠을때
        $(this).css("border","1px solid transparent")
        $(this).children("a").removeClass("on")
        $(this).children(".submenu").stop().slideUp("fast");
    }); 
}
function popup(){
    $(".news li:first").click(function(){
        $("#popup").removeClass("d-none")
    })
    $("#popup > button").click(function(){
        $(this).parent().addClass("d-none")
    })
};

function tab(){
    // 클릭하면 active > 없으면 추가 / 있으면 아무 반응 없게
    //  news gallery 를 보이고 감추고 기능 추가
    $(".board-tittle li").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active")
            $(this).siblings().removeClass("active")
            var idx = $(this).index(); //보더 타이틀의 인덱스 번호, 몇번쨰 li 인지 감지
            $(".board-contents ul").eq(idx).removeClass("d-none")
            // 보드 콘텐츠 ul 의 idx 번째 인덱스에서 디논 지우고
            // 보드 콘텐츠 ul 의 idx 의 형제는 디논 추가
            $(".board-contents ul").eq(idx).siblings().addClass("d-none")
        }
    })
}