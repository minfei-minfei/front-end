$(function(){
    //�л���ǩҳ
    $(".dropdown-toggle").on("click",function(){
        $(this).parent("li").addClass("active").siblings().removeClass("active");
    });

});