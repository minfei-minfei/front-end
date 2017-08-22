/*配置jquery文件*/
requirejs.config({
    paths:{
        jquery: "jquery-1.12.4"
    }
});
require(['jquery','dialog'],function($,dialog){
    var $btn = $("#open");
    var settings = {
        width: 400,
        height: 300,
        title: "登录",
        content: "login.html"
    };
    $btn.on("click",function(){
        dialog.open(settings);
    });
});