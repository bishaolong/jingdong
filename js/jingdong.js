/**
 * Created by 龙少 on 2017/5/30.
 */


$(function(){

    //轮播

    var swiper = new Swiper('.swiper-container',{

        pagination: '.swiper-pagination'
    });


    //滚动

    $(window).scroll(
        function(){
            var a=$(window).scrollTop();

            if(a>170){
                $("header").addClass("bg")
            }

            if(a<170){
                $("header").removeClass("bg")
            }
        }
    )


    var i=18000;//5个小时

    setInterval(function(){
        i=i-1;

        var h=parseInt(i/3600);
        var m=parseInt(i%3600/60);
        var s=i%3600%60;

        $(".h1").text(parseInt(h/10))
        $(".h2").text(h%10);

        $(".m1").text(parseInt(m/10))
        $(".m2").text(m%10);

        $(".s1").text(parseInt(s/10))
        $(".s2").text(s%10);
    },1000)


});