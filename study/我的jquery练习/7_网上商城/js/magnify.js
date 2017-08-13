/**
 * Created by Administrator on 2017/8/12.
 */
/*文档就绪函数*/
$(function(){
    var $smallPic = $("#small");
    var $bigPic;
    var $drag = $("#drag");
    var scaleX;
    var scaleY;
    $smallPic.hover(function(){
        $drag.show();
        $("#big").show();
        $bigPic = $("#big img");
        /*大图片与小图片的比例*/
        scaleX = $bigPic.width()/$("#small img").width();
        scaleY = $bigPic.height()/$("#small img").height();
    },function(){
        $drag.hide();
        $("#big").hide();
    });
    /*指针相对于小图片的位置*/
    var disX;
    var disY;

    $smallPic.on("mousemove",function(e){
        disX = e.pageX-$smallPic.offset().left;
        disY = e.pageY-$smallPic.offset().top;
        /*drag移动*/
        if(disX<50){
            $drag.css("left",""+$smallPic.offset().left);
        }else if(disX>260){
            $drag.css("left","260"+$smallPic.offset().left);
        }else{
            $drag.css({
                left: e.pageX-50
            });
        }
        if(disY<50){
            $drag.css("top",""+$smallPic.offset().top);
        }else if(disY>260){
            $drag.css("top","260"+$smallPic.offset().top);
        }else{
            $drag.css({
                top: e.pageY-50
            });
        }
        /*大图片移动*/
        $bigPic.css({//后加入的元素事件绑定
            left: "-"+(disX-50)*scaleX+"px",
            top: "-"+(disY-50)*scaleY+"px"
        });

    });

});