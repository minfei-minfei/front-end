/**
 * Created by Administrator on 2017/8/13.
 */
/*����ڶ��ְ��¼������ļ���������
* @param elem:���¼��Ķ���
* @param type:���¼�������,string����
* @param handler:�¼�������
* */
function addEvent(elem,type,handler){
    if(elem.addEventListener){//�������
        elem.addEventListener(type,handler);//���÷���
    }else if(elem.attachEvent){
        elem.attachEvent("on"+type,handler);
    }else{
        elem["on"+type] = handler;//�����Ǳ�����������
    }
}
/*ע��attachEvent��Ӧ���������⣺
* 1.����ͬһ��Ԫ�ذ󶨲�ͬ���¼�ʱ���¼��Ĵ���˳��ʹ������д˳���෴
* 2.thisָ��window�������ǵ�ǰ����
* */