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
});