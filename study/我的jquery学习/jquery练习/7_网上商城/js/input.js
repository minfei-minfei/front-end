/**
 * Created by Administrator on 2017/8/11.
 */
/*�ĵ���������*/
$(function () {
    var $input = $("#header input");
    $input.on("focus",function(){
        //��ý����ʱ���������Ĭ��ֵ����ʾû������ֵ�������
        if(this.value==this.defaultValue){
            //this.value="";Ч�ʸ���
            $(this).val("");
        }
    });
    $input.on("blur",function(){
        //ʧȥ�����ʱ�������Ϊ�գ���ʾû������ֵ����������ΪĬ��ֵ
        if(this.value==""){
            this.value = this.defaultValue;
        }
    });
});