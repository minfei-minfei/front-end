/**
 * Created by Administrator on 2017/8/12.
 */
/*�ĵ���������*/
$(function(){
    var $brandTag = $("#brand-tag li");
    var $brandImg = $("#brand-img");
    var $nowindex=0;
    var n;
    $brandTag.on("click",function(){
        /*�ƶ�ͼƬ*/
        n = $(this).index()-$nowindex;
        $brandImg.stop().animate({/*ע�⣺����ǰ��ǵü�stop*/
            left: "-="+790*n
        },2000);
        $nowindex = $(this).index();
        $(this).addClass("selected").siblings().removeClass("selected");

    });
    var $brandPic = $(".brand");
    var $brandMask = $(".mask");
    var $brandName = $("#brand-img a");
    $brandPic.on("mouseover",function(){
        //$brandMask.eq($(this).index()).show();

    });
    $brandMask.on("mouseout",".mask",function(){
        //$brandMask.eq($(this).index()).hide();

    });
    $brandName.on("mouseover",function(e){
        //$brandName.eq($(this).index()).css("color","deepskyblue");
        console.log($brandName);
        console.log(this);
        console.log($(this));
        console.log($(this).index());
    });
});