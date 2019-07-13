
// 自动轮播图
    $(".img-box").banner({
        aimg:$(".img-box").find("img"),						
        autoPlay:true,			
        delayTime:1500,			
        moveTime:200,		
        index:0
    })

//楼层切换
    $(".btns").children("li").click(function(){
		console.log($(".floor").eq($(this).index()).offset().top);
			
        var index = $(this).index();
        var iNowFloor = $(".floor").eq(index);
        var t = iNowFloor.offset().top;
        $("html").stop().animate({
            scrollTop:t
        })			
    })

//三级菜单
    class San{
        constructor(){
            this.sanji = document.querySelector(".sanji a");
            this.menu = document.querySelector(".menu");
            this.no = document.querySelector(".no .no1");

            this.type=0;
            this.init();
        }
        init(){
            var that = this;
            this.sanji.onmouseover = function(){
                if(that.type == 0){
                    that.menu.style.display="block";
                    that.type=1;

                    that.iNow();
                }else{
                    that.menu.style.display="none";
                    that.type=0;
                }
                that.menu.onmouseout = function(){
                    that.menu.style.display="none";
                }          
            }
        }
        iNow(){
            var that = this;
            this.menu.onmouseover = function(){
                //console.log(1);
                that.no.style.display="block";
                that.menu.onmouseout = function(){
                    that.no.style.display="none";
                }
            }
        }
    }
    new San();
    

    // $('.sanji a').hover(function(){
	// 	$(this).find('.menu').toggle();
	// })
    // $('.sanji li').hover(function(){
	// 	$(this).children('ul').toggle();
	// })

//点击购物车
   var myCar = document.getElementById("mycar");
   myCar.onclick = function(){
       alert("请先登陆才能访问购物车哦！");
   }