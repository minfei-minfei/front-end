/**
 * Created by Administrator on 2017/8/13.
 */
/*
* 解决css类选择器的兼容性问题
* @param className:要查找的class名称
* @param context: 要搜索的范围
* 返回类型：数组
* */
function getByClass(className,context){
    context = context || document;//如果传了参数，就在搜索范围里找，没传就在document里找
    if(context.getElementsByClassName){//能力检测，不传参数
        return context.getElementsByClassName(className);
    }else{
        var result = [];
        var arr = context.getElementsByTagName("*");
        for(var i in arr){
            if(arr[i].className.indexOf(className) != -1){/*判断每一个元素的类名是否为当前要查找的类名*/
                result.push(arr[i]);
            }
        }
        return result;
    }
}