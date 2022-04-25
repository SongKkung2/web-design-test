$(function(){
    let intervalID = setInterval(slide,3000)
})
function slide(){
    let currItem = $(".items li.top")
    let nextItem = currItem.next();
    if(!nextItem.length)nextItem = $(".items li:first")
    currItem.removeClass("top")
    nextItem.addClass("top")
}