/**
 * Created by Administrator on 2017/8/11.
 */
/*�ĵ���������*/
$(function(){
    var $act = $("#act li");
    var $actInfo = $("#act div");
    var $nowindex;
    $act.hover(function(){/*ע�⣺��������a���¼���index����0*/
        //����
        $nowindex = $(this).index();
        $(this).closest().css("color","lightblue");/*ע�⣺����Ҫ��closest��������children�������ѡ��div*/
        $actInfo.eq($nowindex).addClass("selected");
    },function(){
        //����
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