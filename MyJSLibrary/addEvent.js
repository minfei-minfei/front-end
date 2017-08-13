/**
 * Created by Administrator on 2017/8/13.
 */
/*解决第二种绑定事件方法的兼容性问题
* @param elem:绑定事件的对象
* @param type:绑定事件的类型,string类型
* @param handler:事件处理函数
* */
function addEvent(elem,type,handler){
    if(elem.addEventListener){//能力检测
        elem.addEventListener(type,handler);//调用方法
    }else if(elem.attachEvent){
        elem.attachEvent("on"+type,handler);
    }else{
        elem["on"+type] = handler;//属性是变量用中括号
    }
}
/*注：attachEvent对应的两个问题：
* 1.当给同一个元素绑定不同的事件时，事件的处理顺序和代码的书写顺序相反
* 2.this指向window，而不是当前对象
* */