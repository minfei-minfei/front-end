/**
 * Created by Administrator on 2017/8/14.
 */
/*
* ��װԭ������ӣ���ȡ��ɾ��cookie����
* @param key:cookie������
* @param val:��Ӧ��ֵ
* @param expires:����ʱ�䣬��λ������
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
    var cookie = document.cookie.split(";");//�õ�һ������
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