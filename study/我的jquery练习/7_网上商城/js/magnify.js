/**
 * Created by Administrator on 2017/8/12.
 */
/*�ĵ���������*/
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
        /*��ͼƬ��СͼƬ�ı���*/
        scaleX = $bigPic.width()/$("#small img").width();
        scaleY = $bigPic.height()/$("#small img").height();
    },function(){
        $drag.hide();
        $("#big").hide();
    });
    /*ָ�������СͼƬ��λ��*/
    var disX;
    var disY;

    $smallPic.on("mousemove",function(e){
        disX = e.pageX-$smallPic.offset().left;
        disY = e.pageY-$smallPic.offset().top;
        /*drag�ƶ�*/
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
        /*��ͼƬ�ƶ�*/
        $bigPic.css({//������Ԫ���¼���
            left: "-"+(disX-50)*scaleX+"px",
            top: "-"+(disY-50)*scaleY+"px"
        });

    });

});