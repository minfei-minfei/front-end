/**
 * Created by Administrator on 2017/8/11.
 */
/*�ĵ���������*/
$(function(){
    var $act = $("#act a");
    var $actInfo = $("#act div");
    var $nowindex;
    $act.hover(function(){
        //����
        $nowindex = $(this).index();
        $(this).css("color","lightblue");
        $actInfo.eq($nowindex).addClass("selected");
    },function(){
        //����
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