$(function(){
    //navegação
    $(".nav-menu-hover").hover(function(){
       $(this).prev().toggle();
    })
    
    $(".nav-menu-hover").prev().hover(function(){
       $(this).toggle();
    })
    
    //ver mais
    $(".ver-mais-btn").on("click", function(){
        $(this).next().toggle();
        if($(this).next().is(":visible")){
            $(this).text("Ver menos");
        }
        if($(this).next().is(":hidden")){
            $(this).text("Ver mais");
        }
    })
});