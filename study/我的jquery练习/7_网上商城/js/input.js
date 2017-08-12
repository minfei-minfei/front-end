/**
 * Created by Administrator on 2017/8/11.
 */
/*ÎÄµµ¾ÍÐ÷º¯Êý*/
$(function () {
    var $input = $("#header input");
    $input.on("focus",function(){
        //this.value="";
        $(this).val("");
    });
    $input.on("blur",function(){
        if(this.value==""){
            this.value = this.defaultValue;
        }
    });
});