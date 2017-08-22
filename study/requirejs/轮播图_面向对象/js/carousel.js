define(['jquery'],function($){
    //定义类
    function Carousel(settings){
        this.$container = $('<div class="carousel-container"></div>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$nav = $('<ul class="carousel-nav"></ul>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$prev = $('<span class="carousel-prev">&lt;</span>');
        this.$next = $('<span class="carousel-next">&gt;</span>');
        this.defaultSettings = {
            selector: "body",
            width: 375,
            height: 250,
            imgArr: ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"],
            speed: 1000,
            navStyle: "square",//round
            arrowStyle: "center"//bottom
        };
        $.extend(this.defaultSettings,settings);
    }

    //定义方法
    Carousel.prototype.init = function(){
        var nowindex =0;
        var timer;
        var length;

        this.$container.append(this.$imgs).append(this.$nav).append(this.$arrows);
        this.$arrows.append(this.$prev).append(this.$next);
        this.$container.appendTo($(this.defaultSettings.selector));

        for(var i=0; i<this.defaultSettings.imgArr.length; i++){
            //动态生成img
            var oImg = document.createElement("img");
            oImg.src = this.defaultSettings.imgArr[i];
            this.$imgs.append(oImg);
            //动态生成li
            var oLi = document.createElement("li");
            oLi.innerHTML = ""+(i+1);
            this.$nav.append(oLi);
        }

        //设置样式
        if(this.defaultSettings.navStyle=="round"){
            $("li",this.$nav).html("").css({
                borderRadius: "50%"
            });
        }
        this.$prev.addClass(this.defaultSettings.arrowStyle);
        this.$next.addClass(this.defaultSettings.arrowStyle);
        this.$container.css({
            width: this.defaultSettings.width,
            height: this.defaultSettings.height
        });


        length = this.defaultSettings.imgArr.length;
        //注：jquery的第二个参数表示查找范围
        $("img", this.$imgs).eq(0).addClass("selected");
        $("li", this.$nav).eq(0).addClass("selected");
        play.call(this);
        //鼠标滑入
        this.$container.on("mouseover",function(){
            clearInterval(timer);
        });
        //鼠标滑出
        this.$container.on("mouseout",function(){
            play.call(this);
        }.bind(this));
        //切换前一个
        this.$prev.on("click",function(){
            nowindex --;
            if(nowindex==-1){
                nowindex = length-1;
            }
            changeImg.call(this);
        }.bind(this));
        //切换后一个
        this.$next.on("click",function(){
            nowindex ++;
            if(nowindex==length){
                nowindex = 0;
            }
            changeImg.call(this);
        }.bind(this));
        //切换序号

        $("li", this.$nav).on("mousemove",function(e){
            nowindex = $(e.target).index();//注：这里的this换成了e.target
            changeImg.call(this);
        }.bind(this));
        //私有方法
        function play(){
            timer = setInterval(function(){
                nowindex++;
                if(nowindex==length){
                    nowindex = 0;
                }
                for(var i=0; i<length; i++){
                    changeImg.call(this);
                }
            }.bind(this),this.defaultSettings.speed);
            //注：在调用的时候改变this的指向
        }
        function changeImg() {
            $("img", this.$imgs).eq(nowindex).addClass("selected").siblings().removeClass("selected");
            $("li", this.$nav).eq(nowindex).addClass("selected").siblings().removeClass("selected");
        }
    };

    return Carousel;
});