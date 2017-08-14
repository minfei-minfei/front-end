/**
 * Created by Administrator on 2017/8/12.
 */
/*文档就绪函数*/
$(function() {
    var $small = $("#small");
    var $big = $("#big");
    var $bigPic = $("#big img");
    var $drag = $("#drag");
    $small.hover(function () {
        $drag.stop().show("fast");
        $big.stop().show("fast");
    }, function () {
        $drag.stop().hide("fast");
        $big.stop().hide("fast");
    }).on("mousemove", function (e) {//JQuery的链式操作
        /*-----------------drag移动---------------*/
        /*让指针始终在drag的正中心*/
        var left = e.pageX - $small.offset().left - $drag.width() / 2;
        var top = e.pageY - $small.offset().top - $drag.height() / 2;
        /*保证drag不超出div*/
        var maxLeft = $small.width() - $drag.width();
        var maxTop = $small.height() - $drag.height();
        /*给drag定位*/
        if (left < 0) {
            left = 0;
        }
        if (left > maxLeft) {
            left = maxLeft;
        }
        if (top < 0) {
            top = 0;
        }
        if (top > maxTop) {
            top = maxTop;
        }
        $drag.css({
            left: left + "px",
            top: top + "px"
        });

        /*-----------------大图片移动------------------*/
        /*drag移动的百分比等于大图片移动的百分比*/
        var scaleX = left / maxLeft;
        var scaleY = top / maxTop;
        $bigPic.css({
            left: -($bigPic.width() - $big.width()) * scaleX + "px",
            top: -($bigPic.height() - $big.height()) * scaleY + "px"
        });
    });

});