$(function () {
    var $fullText = $("#full-text");
    $fullText.prop("full",false);
    $fullText.on("click",function(){
        if(!$(this).prop("full")){
            $(this).text("收起");
            $(".media p").css("display","block");
        }else{
            $(this).text("显示全文");
            $(".media p").css("display","-webkit-box");
        }
        $(this).prop("full",!$fullText.prop("full"));
    });
    $("#paynow").prop("flag",false).on("click",function(){
        if(!$(this).prop("flag")){
            $("#pay").show();
        }else{
            $("#pay").hide();
        }
        $(this).prop("flag",!$(this).prop("flag"));
    });
    /*地理定位*/
    var $address = $("#address");
    var $alert = $("#myAlert");
    var $aContent = $("#myAlert span");
    $address.on("click",function(){
        if(navigator.geolocation){
            $address.html("搜索中...");
            navigator.geolocation.getCurrentPosition(showPosition,showError);
        }else{
            $aContent.html('该浏览器不支持地理位置!');
            $alert.show();
        }
    });

    function showPosition(position){
        var lat=position.coords.latitude;
        var lng=position.coords.longitude;
        $address.html("纬度:"+parseInt(lat)+","+"经度:"+parseInt(lng));
    }
    function showError(error){
        switch(error.code)
        {
            case error.PERMISSION_DENIED:
                $aContent.html("用户拒绝对获取地理位置的请求。");
                $alert.show();
                break;
            case error.POSITION_UNAVAILABLE:
                $aContent.html("位置信息是不可用的。");
                $alert.show();
                break;
            case error.TIMEOUT:
                $aContent.html("请求用户地理位置超时。");
                $alert.show();
                break;
            case error.UNKNOWN_ERROR:
                $aContent.html("未知错误。");
                $alert.show();
                break;
        }
    }
    /*日期校验*/
    //转换时间类型为 yyyy-mm-dd
    function FormatDate (strTime) {
        var date = new Date(strTime);
        var formatedMonth = ("0" + (date.getMonth() + 1)).slice(-2);
        var formatedDate = ("0" + (date.getDate())).slice(-2);
        return date.getFullYear()+"-"+formatedMonth+"-"+formatedDate;
    }

//开始时间
    $("#keyword_time_min").change(function(){
        var d1=new Date($(this).val());            //获取当前时间
        var d2=new Date(d1);
        // d2.setFullYear(d2.getFullYear()+1);      //当前时间+1年
        d2.setDate(d2.getDate()+7);             //当前时间+7天
        d2=FormatDate(d2);                      //转换d2为YYYY-MM-DD格式

        $("#keyword_time_max").attr("max",d2); //最大时间为d2
        $("#keyword_time_max").attr("min",$(this).val()); //最小时间为当前时间

    });

//终止时间
    $("#keyword_time_max").change(function(){
        var d3=new Date($(this).val());
        var d4=new Date(d3);
        // d4.setFullYear(d4.getFullYear()-1);
        d4.setDate(d4.getDate()-7);             //当前时间-7天
        d4=FormatDate(d4);

        $("#keyword_time_min").attr("min",d4);
        $("#keyword_time_min").attr("max",$(this).val());

    });
});