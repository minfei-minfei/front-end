/*配置jquery文件*/
requirejs.config({
    paths:{
        jquery: "jquery-1.12.4"
    }
});
define(['jquery'],function($){
    /*定义dialog类*/
    function Dialog(settings){
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$main = $('<div class="dialog-main"></div>');
        this.$title= $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-title-item"></div>');
        this.$close = $('<div class="dialog-title-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
        this.defaultSettings = {
            width: 500,
            height: 400,
            title: "弹出层",
            content: "hello!"
        };
        $.extend(this.defaultSettings,settings);
    }
    Dialog.prototype.open = function(){
        //将html组件进行组合,并追加到body
        //链式操作，注意操作对象不变
        this.$container.append(this.$mask).append(this.$main).appendTo($("body"));
        this.$main.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);

        //设置dialog样式
        this.$main.css({
            width: this.defaultSettings.width,
            height: this.defaultSettings.height,
            /*居中*/
            marginLeft: -this.defaultSettings.width/2,
            marginTop: -this.defaultSettings.height/2
        });
        this.$item.html(this.defaultSettings.title);

        //解析content
        if(this.defaultSettings.content.indexOf(".html") !=-1 ){
            this.$content.load(this.defaultSettings.content);
        }else{
            this.$content.html(this.defaultSettings.content);
        }
        this.$close.on("click",function(){
            this.close();//调用dialog类的close方法
        }.bind(this));//注意：bind要写在function的后面
    };
    Dialog.prototype.close = function(){
        this.$container.remove();
    };
    return Dialog;

});