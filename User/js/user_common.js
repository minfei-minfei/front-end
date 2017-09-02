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
});