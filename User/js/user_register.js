/*验证码*/
$(function(){
    var code;//声明一个变量用于存储生成的验证码
    /*切换验证码*/
    $("#code").on("click",changeCode());
    $("#change-code").on("click",changeCode);
    function changeCode(){
        //alert("换图片");
        var arrays=[
            '1','2','3','4','5','6','7','8','9','0',
            'a','b','c','d','e','f','g','h','i','j',
            'k','l','m','n','o','p','q','r','s','t',
            'u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','O','P','Q','R','S','T',
            'U','V','W','X','Y','Z'
        ];
        code='';//初始化验证码
        //alert(arrays.length);
        //随机从数组中获取四个元素组成验证码
        for(var i=0;i<4;i++){
            //随机获取一个数组的下标
            var r=parseInt(Math.random()*arrays.length);
            code+=arrays[r];
            //alert(arrays[r]);
        }
        //alert(code);
        $("#code").html(code);//将验证码写入指定区域
    }

/*效验验证码(表单被提交时触发)*/
    $("#user-register-form button").on("click",checkCode);
    function checkCode(){
        //获取用户输入的验证码
        var $vcode = $("#vcode");
        if($vcode.val().toLowerCase()==code.toLowerCase())
        {
            //验证码正确(提交表单)
            if($oUserPsd.siblings(".checked").css("display")=="block" && $oUserPsd2.siblings(".checked").css("display")=="block"
                && $userName.siblings(".checked").css("display")=="block"){
                //清空所有信息
                var $aInput = $("input");
                $aInput.val("");
                $aInput.trigger("blur");
                return true;
            }else{
                $("body").append(alert);
                $(".alert-warning span").html("请填写正确信息");
                return false;
            }
        }
        //验证码不正确,表单不允许提交
        /*弹出警告框*/
        $("body").append(alert);
        $(".alert-warning span").html("请输入正确的验证码");
        $vcode.val("");
        $vcode.trigger("blur");
        return false;
    }
/*验证用户名*/
    var $userName = $("#user-name");
    $userName.on("keyup",function(){
        //console.log($userName.val().length);
        if($(this).val().length>0 && $(this).val().length<=8){
            $(this).siblings(".checked").show().siblings(".checked-false").hide();
        }else{
            $(this).siblings(".checked-false").show().siblings(".checked").hide();
        }
    }).on("blur",function(){
        if(this.value == this.defaultValue){
            $(this).siblings(".checked-false").hide().siblings(".checked").hide();
        }
    });
/*验证密码*/
    var $aUserPsd = $(".user-psd");
    $aUserPsd.on("keyup",function(){
        if($(this).val().length>=6 && $(this).val().length<=12){
            $(this).siblings(".checked").show().siblings(".checked-false").hide();
        }else{
            $(this).siblings(".checked-false").show().siblings(".checked").hide();
        }
    }).on("blur",function(){
        if(this.value == this.defaultValue){
            $(this).attr("type","text");
            $(this).siblings(".glyphicon-eye-open").css("display","none");
            $(this).siblings(".checked-false").hide().siblings(".checked").hide();
        }
    }).on("focus",function(){
        $(this).attr("type","password");
        $(this).siblings(".glyphicon-eye-open").css("display","block");
    });
    /*验证两次密码的一致性*/
    var $oUserPsd = $("#user-psd");
    var $oUserPsd2 = $("#user-psd2");
    $oUserPsd2.on("blur",function(){
        //两次密码长度正确后再验证一致性
        if($oUserPsd.siblings(".checked").css("display")=="block" && $oUserPsd2.siblings(".checked").css("display")=="block"
            && $oUserPsd.val() != $oUserPsd2.val()){
            /*弹出警告框*/
            $("body").append(alert);
            $(".alert-warning span").html("两次密码不一致");
        }else if($oUserPsd.val() == $oUserPsd2.val()){
            //如果用户没有关闭警告框，修改正确后自动移除警告框
            if($(".alert","body").length){
                // console.log($(".alert","body").length);
                $(".alert-warning button").trigger("click");
            }
        }
    });
/*小眼睛*/
    var $eye = $(".glyphicon-eye-open");
    $eye.on("click",function(){
        alert("111");
    });
});
