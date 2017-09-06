/**
 * Created by Administrator on 2017/8/11.
 */
/*文档就绪函数*/
$(function(){
    var $act = $("#act li");
    var $actInfo = $("#act div");
    var $nowindex;
    $act.hover(function(){/*注意：如果这里给a绑定事件，index总是0*/
        //滑入
        $nowindex = $(this).index();
        $(this).closest().css("color","lightblue");/*注意：这里要用closest而不能用children，否则会选中div*/
        $actInfo.eq($nowindex).addClass("selected");
    },function(){
        //滑出
        $act.closest().css("color","gray");
        $actInfo.removeClass("selected");
    });
    $act.on("mousemove",function(e){
        $actInfo.eq($nowindex).css({
            left: e.pageX-60,
            top: e.pageY+20
        })
    });
});