$(function(){
    //�л���ǩҳ
    $(".dropdown-toggle").on("click",function(){
        $(this).parent("li").addClass("active").siblings().removeClass("active");
    });
    /*�������ʧȥ����*/
    //:inputѡ������ input, textarea, select �� button Ԫ��.
    var $input = $(":input");
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