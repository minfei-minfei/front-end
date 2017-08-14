/**
 * Created by Administrator on 2017/8/14.
 */
/*
* 封装原生的添加，获取，删除cookie方法
* @param key:cookie的名字
* @param val:对应的值
* @param expires:过期时间，单位是天数
* */
function addCookie(key,val,expires){
    var str = key +"="+ val;
    if(expires!=undefined){
        var date = new Date();
        date.setDate(date.getDate()+expires);
        str = str + ";expires="+date.toUTCString();
    }
    document.cookie = str;
}
function getCookie(key){
    var cookie = document.cookie.split(";");//得到一个数组
    for(var i in cookie){
        var arr = cookie[i].split("=");
        if(arr[0].trim()==key){
            return arr[1];
        }
    }
}
function delCookie(key){
    addCookie(key,"",-1);
}