/**
 * Created by Administrator on 2017/8/10.
 */
/*文档就绪函数*/
$(function(){
    var $skin = $(".skin");
    var $bgcolor;
    var date = new Date();
    if($bgcolor!=null){
        /*加载皮肤颜色*/
        $("#nav").css("background",$bgcolor);
        $("#menu-title").css("background",$bgcolor);
    }
    /*换肤*/
    $skin.on("click",function(){
        $bgcolor = $(this).css("background");
        $skin.empty(".selected");
        $(this).append('<div class="selected"></div>');
        $("#nav").css("background",$bgcolor);
        $("#menu-title").css("background",$bgcolor);
        /*设置cookie*/
        /*date.setDate(date.getDate() + 7);
        document.cookie = "$bgcolor="+$bgcolor+";expires=" + date.toUTCString();
        alert(date.toUTCString());*/
    });

});