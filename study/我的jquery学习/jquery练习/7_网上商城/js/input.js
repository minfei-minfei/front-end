/**
 * Created by Administrator on 2017/8/11.
 */
/*文档就绪函数*/
$(function () {
    var $input = $("#header input");
    $input.on("focus",function(){
        //获得焦点的时候，输入框是默认值，表示没有输入值，则设空
        if(this.value==this.defaultValue){
            //this.value="";效率更高
            $(this).val("");
        }
    });
    $input.on("blur",function(){
        //失去焦点的时候，输入框为空，表示没有输入值，则重新设为默认值
        if(this.value==""){
            this.value = this.defaultValue;
        }
    });
});