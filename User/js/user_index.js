$(function(){
    //ģ�⣺�ж��Ƿ��ǵ�һ�ε�¼
    if(localStorage.getItem("firstLogin")==null){
        $("#protocolModal").modal({
            backdrop: "static",/*���û����ģ̬���ⲿʱ����ر�ģ̬��*/
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