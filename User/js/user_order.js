$(function () {
    var $fullText = $("#full-text");
    $fullText.prop("full",false);
    $fullText.on("click",function(){
        if(!$(this).prop("full")){
            $(this).text("收起");
            $(".media p").css("display","block");
            console.log("111");
        }else{
            $(this).text("显示全文");
            $(".media p").css("display","-webkit-box");
            console.log("222");
        }
        $(this).prop("full",!$fullText.prop("full"));
    });
});