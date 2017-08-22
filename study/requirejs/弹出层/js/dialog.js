/*配置jquery文件*/
requirejs.config({
    paths:{
        jquery: "jquery-1.12.4"
    }
});
define(['jquery'],function($){
    var dialog = {
        open: function(settings){
            var defaultSettings = {
                width: 500,
                height: 400,
                title: "弹出层",
                content: "hello!"
            };
            /*合并弹出层的设置参数*/
            $.extend(defaultSettings,settings);
            /*动态添加DOM结构*/
            var html='<div class="dialog-container">'
                + '<div class="dialog-mask"></div>'
                + '<div class="dialog-main">'
                + '<div class="dialog-title">'
                + '<div class="dialog-title-item">'+defaultSettings.title+'</div>'
                + '<div class="dialog-title-close">[X]</div>'
                + '</div>'
                + '<div class="dialog-content">'+defaultSettings.content+'</div>'
                + '</div>'
                + '</div>';
            $("body").append(html);
            $(".dialog-main").css({
                width: defaultSettings.width,
                height: defaultSettings.height,
                /*dialog-main居中*/
                marginLeft: -defaultSettings.width / 2,
                marginTop: -defaultSettings.height / 2
            });
            /*解析content部分*/
            if(defaultSettings.content.indexOf(".html") !=-1 ){
                $(".dialog-content").load(defaultSettings.content);
            }else{
                $(".dialog-content").html(defaultSettings.content);
            }
            /*关闭弹出层*/
            $(".dialog-title-close").on("click",function(){
                $(this).parents(".dialog-container").remove();
            });
        }
    };
    return dialog;
});