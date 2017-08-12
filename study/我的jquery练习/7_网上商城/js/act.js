/**
 * Created by Administrator on 2017/8/11.
 */
/*文档就绪函数*/
$(function(){
    var $act = $("#act a");
    var $actInfo = $("#act div");
    var $nowindex;
    $act.hover(function(){
        //滑入
        $nowindex = $(this).index();
        $(this).css("color","lightblue");
        $actInfo.eq($nowindex).addClass("selected");
    },function(){
        //滑出
        $act.css("color","gray");
        $actInfo.removeClass("selected");
    });
    $act.on("mousemove",function(e){
        $actInfo.eq($nowindex).css({
            left: e.pageX-60,
            top: e.pageY+20
        })
    });
});