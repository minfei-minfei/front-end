/**
 * Created by Administrator on 2017/8/13.
 */
/*
* ���css��ѡ�����ļ���������
* @param className:Ҫ���ҵ�class����
* @param context: Ҫ�����ķ�Χ
* �������ͣ�����
* */
function getByClass(className,context){
    context = context || document;//������˲���������������Χ���ң�û������document����
    if(context.getElementsByClassName){//������⣬��������
        return context.getElementsByClassName(className);
    }else{
        var result = [];
        var arr = context.getElementsByTagName("*");
        for(var i in arr){
            if(arr[i].className.indexOf(className) != -1){/*�ж�ÿһ��Ԫ�ص������Ƿ�Ϊ��ǰҪ���ҵ�����*/
                result.push(arr[i]);
            }
        }
        return result;
    }
}