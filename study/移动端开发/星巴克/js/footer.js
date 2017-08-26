/*ÎÄµµ¾ÍÐ÷º¯Êý*/
$(function(){
    var $footerMenu = $(".footer-link h3");
    $footerMenu.prop("state","true");
    $footerMenu.on("click",function(){
        if($(this).prop("state")){
            $(this).css({
                color: "#a98e67"
            });
            $(this).next(".footer-link-items").show();
        }else{
            $(this).css({
                color: "white"
            });
            $(this).next(".footer-link-items").hide();
        }
        $(this).prop("state",!$(this).prop("state"));
    });
});