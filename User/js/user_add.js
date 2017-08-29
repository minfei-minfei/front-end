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
});