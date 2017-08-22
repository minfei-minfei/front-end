require(['jquery','carousel'], function ($,Carousel) {
    var settings1 = {
        selector: "#container1",
        width: 375,
        height: 250,
        imgArr: ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"],
        speed: 1000,
        navStyle: "square",
        arrowStyle: "bottom"
    };
    var carousel1 = new Carousel(settings1);
    carousel1.init();
    var settings2 = {
        selector: "#container2",
        width: 250,
        height: 375,
        imgArr: ["img/5.jpg","img/6.jpg","img/7.jpg"],
        speed: 1500,
        navStyle: "round",
        arrowStyle: "center"
    };
    var carousel2 = new Carousel(settings2);
    carousel2.init();
    var settings3 = {
        selector: "#container3",
        width: 200,
        height: 200,
        imgArr: ["img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpg"],
        speed: 1000,
        navStyle: "square",
        arrowStyle: "center"
    };
    var carousel3 = new Carousel(settings3);
    carousel3.init();
    var settings4 ={
        selector: "#container4",
        width: 200,
        height: 267,
        imgArr: ["img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg","img/17.jpg"],
        speed: 1500,
        navStyle: "round",
        arrowStyle: "center"
    };
    var carousel4 = new Carousel(settings4);
    carousel4.init();
});