/**
 * Created by Administrator on 2017/8/10.
 */
/*�ĵ���������*/
$(function(){
    var $skin = $(".skin");
    var curIndex,curSkin;
    if($.cookie("curSkin")!=undefined){
        /*����Ƥ����ɫ*/
        changeSkin($.cookie("curSkin"));
    }
    /*����*/
    $skin.on("click",function(){
        curIndex = $(this).index();
        curSkin = $(this).attr("id");
        changeSkin(curSkin);
        /*����cookie*/
        $.cookie("curSkin",curSkin,{expires:7});
    });
    function changeSkin(skin){
        $skin.empty();
        $skin.eq(curIndex).append('<div class="selected"></div>');
        $("#skinfile").attr("href","css/"+skin+".css");
    }
});