/**
 * Created by Administrator on 2017/8/10.
 */
/*文档就绪函数*/
$(function(){
    var $adInfo = $("#info .ad");
    var $adImg = $("#ad img");
    var $nowindex = 0;
    function changeImg(){
        $adInfo.removeClass("selected");
        $adInfo.eq($nowindex).addClass("selected");
        $adImg.removeClass("selected");
        $adImg.eq($nowindex).addClass("selected");
    }
    $adInfo.on("mouseover",function(){
        $nowindex = $(this).index();
        changeImg();
    });
    var timer;
    function play(){
        timer = setInterval(function(){
            $nowindex++;
            if($nowindex == $adInfo.length){
                $nowindex = 0;
            }
            changeImg();
        },1000);
    }
    play();
    $("#ad").hover(function(){
        //滑入
        clearInterval(timer);
    },function(){
        play();
    });
});