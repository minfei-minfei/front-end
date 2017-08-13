/**
 * Created by Administrator on 2017/8/13.
 */
/*ÎÄµµ¾ÍÐ÷º¯Êý*/
$(function(){
    var $introTitle = $("#intro span");
    var $introDetail = $("#intro div");
    $introTitle.on("click",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $introDetail.eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    });
});