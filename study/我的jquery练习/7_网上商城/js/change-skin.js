/**
 * Created by Administrator on 2017/8/10.
 */
/*�ĵ���������*/
$(function(){
    var $skin = $(".skin");
    var $bgcolor;
    var date = new Date();
    if($bgcolor!=null){
        /*����Ƥ����ɫ*/
        $("#nav").css("background",$bgcolor);
        $("#menu-title").css("background",$bgcolor);
    }
    /*����*/
    $skin.on("click",function(){
        $bgcolor = $(this).css("background");
        $skin.empty(".selected");
        $(this).append('<div class="selected"></div>');
        $("#nav").css("background",$bgcolor);
        $("#menu-title").css("background",$bgcolor);
        /*����cookie*/
        /*date.setDate(date.getDate() + 7);
        document.cookie = "$bgcolor="+$bgcolor+";expires=" + date.toUTCString();
        alert(date.toUTCString());*/
    });

});