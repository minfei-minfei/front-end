/*配置jquery文件*/
requirejs.config({
    paths:{
        jquery: "jquery-1.12.4"
    }
});
require(['jquery','dialog'],function($,Dialog){
    //设置dialog参数
    var settings={
        width: 400,
        height: 300,
        title: "登录",
        content: "login.html"
    };
    var $btn = $("#open");
    $btn.on("click", function () {
        //实例化对象
        var mydialog = new Dialog(settings);
        mydialog.open();
        $(".dialog-title-close").on("click",function(){
            mydialog.close();
        });
    });
});