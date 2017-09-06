/**
 * Created by Administrator on 2017/8/10.
 */
/*文档就绪函数*/
$(function(){
    var $skin = $(".skin");
    var curIndex,curSkin;
    if($.cookie("curSkin")!=undefined){
        /*加载皮肤颜色*/
        changeSkin($.cookie("curSkin"));
    }
    /*换肤*/
    $skin.on("click",function(){
        curIndex = $(this).index();
        curSkin = $(this).attr("id");
        changeSkin(curSkin);
        /*设置cookie*/
        $.cookie("curSkin",curSkin,{expires:7});
    });
    function changeSkin(skin){
        $skin.empty();
        $skin.eq(curIndex).append('<div class="selected"></div>');
        $("#skinfile").attr("href","css/"+skin+".css");
    }
});