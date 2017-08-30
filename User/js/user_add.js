$(function(){
    /*上传照片*/
    function fileUpLoad(){
        var file = this.files[0];
        if(!FileReader){
            $("#myAlert span").html("你的浏览器不支持H5的FileReader");
            $("#myAlert").show();
            $("#upload").attr("disabled","disabled");
            return;
        }
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);//将文件读取为Data URL 读取结果放在result中
        fileReader.onload = function(){
            $("#upload-picture img").attr("src",this.result);
            localStorage.setItem("user_add",this.result);
        }
    }
    $("#upload").on("change",fileUpLoad);
    /*保存头像*/
    if(localStorage.getItem("user_add")){
        $("#upload-picture img").attr("src",localStorage.getItem("user_add"));
    }
    /*输入框获得失去焦点*/
    //:input选择所有 input, textarea, select 和 button 元素.
    var $input = $(":input");
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
    //收起显示折叠菜单
    var $collapse = $("[data-toggle='collapse']");
    $collapse.prop("show",true);//show为true表示展开，false表示折叠
    $collapse.on("click",function(){
        if($(this).prop("show")){
            $(this).html("显示"+"<span class='glyphicon glyphicon-pushpin'></span>");
        }else{
            $(this).html("收起"+"<span class='caret'></span>");
        }
        $(this).prop("show",!$(this).prop("show"));
    });
});