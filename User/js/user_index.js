$(function(){
    //模拟：判断是否是第一次登录
    if(localStorage.getItem("firstLogin")==null){
        $("#protocolModal").modal({
            backdrop: "static",/*当用户点击模态框外部时不会关闭模态框*/
            show: true
        });
        $("#not-agree").on("click",function(){
            self.location = "user_login.html";
        });
        $("#agree").on("click",function(){
            localStorage.setItem("firstLogin","true");
        });
    }
//            localStorage.clear();

});