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
            this.value="";
        }
        $(this).css("color","inherit");
    });
    $input.on("blur",function(){
        //ʧȥ�����ʱ�������Ϊ�գ���ʾû������ֵ����������ΪĬ��ֵ
        if(this.value==""){
            this.value = this.defaultValue;
            $(this).css("color","lightgray");
        }else{
            $(this).css("color","inherit");
        }
    });
    /*������һҳ*/
    $(function(){
        var $back = $(".glyphicon-chevron-left");
        $back.on("click",function(){
            history.back();
        });
    });
});