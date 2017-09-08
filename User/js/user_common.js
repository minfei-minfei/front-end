/*定义一个Alert类*/
function Alert(settings){
    this.$alert = $('<div class="alert alert-dismissable"></div>');
    this.$close = $('<button class="close" data-dismiss="alert">&times;</button>');
    this.$strong = $('<strong>警告！</strong>');
    this.$span = $('<span>网络连接错误</span>');
    this.defaultSettings = {
        selector: "body",
        type: "alert-warning",
        content: "网络连接错误"
    };
    $.extend(this.defaultSettings,settings);
}
Alert.prototype.init = function(){
    this.$alert.append(this.$close).append(this.$strong).append(this.$span);
    $(this.defaultSettings.selector).append(this.$alert);
    this.$span.html(this.defaultSettings.content);
    this.$alert.addClass(this.defaultSettings.type);
};
Alert.prototype.close = function(){
    this.$close.trigger("click");
};
/*-----------------------------------*/
$(function(){
    //切换标签页
    $(".dropdown-toggle").on("click",function(){
        $(this).parent("li").addClass("active").siblings().removeClass("active");
    });
    /*输入框获得失去焦点*/
    //:input选择所有 input, textarea, select 和 button 元素.
    var $input = $(":input");
    $input.on("focus",function(){
        //获得焦点的时候，输入框是默认值，表示没有输入值，则设空
        if(this.value==this.defaultValue){
            this.value="";
        }
        $(this).css("color","inherit");
    });
    $input.on("blur",function(){
        //失去焦点的时候，输入框为空，表示没有输入值，则重新设为默认值
        if(this.value==""){
            this.value = this.defaultValue;
            $(this).css("color","lightgray");
        }else{
            $(this).css("color","inherit");
        }
    });
    /*返回上一页*/
    $(function(){
        var $back = $(".glyphicon-chevron-left");
        $back.on("click",function(){
            history.back();
        });
    });
    //激活tooltip工具
    $("[data-toggle='tooltip']").tooltip();

});