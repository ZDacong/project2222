define(()=>{
    //	当前区域拿不到其他模块的数据,因为模块不一定加载完成
    //	但是在当前区域可以定义功能,在功能中可以使用其他模块的数据
    //	因为功能会在主文件中,模块加载完成之后,再去执行
    //	那个时候就可以拿到所有其他模块的数据了
        
        class Tab{
            constructor(options){
                this.li = $("#ul").children("li");
                this.child = options.div;
            }
            init(){
                var that = this;
                
                this.li.on("click",function(){
                    $(this).addClass("active").siblings().removeClass("active");
                    
                    that.child.eq($(this).index()).show().siblings().hide();
                })
            }
    //		...
    //		..
    //		...
        }
        
        return {
            tab:Tab
        };
    })