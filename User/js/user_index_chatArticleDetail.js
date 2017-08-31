$(function(){
    //ÆÀÂÛ
    $(".glyphicon-comment").on("click",function(){
        $("#comment-box").show();
        $("#comment-box button").on("click",function(){
            $("#comment-box").hide();
        });
    });
});