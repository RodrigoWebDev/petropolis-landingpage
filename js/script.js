$(function(){
    $(".nav-menu-hover").hover(function(){
       $(this).prev().toggle();
    })
    
    $(".nav-menu-hover").prev().hover(function(){
       $(this).toggle();
    })
});