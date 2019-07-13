//选项卡
    var ali = document.querySelectorAll("#ul li");
    var adiv = document.querySelectorAll(".splb div ul li");
    //console.log(adiv);

    for(var i=0;i<ali.length;i++){
        ali[i].setAttribute("zhang",i);

        ali[i].onmouseover=function(){
            //console.log(1);
            for(var j=4;j<adiv.length;j++){
                console.log(adiv.length);
                //adiv[j].className = "";
                adiv[j].style.display = "none";
            }
            //this.className = "active";
            var index = this.getAttribute("zhang");
            adiv[index].style.display = "block";
        }
    };

    // require.config({
    //     baseUrl:"module",
    //     paths:{
    //         jq:"../../js/jquery.js",
    //         t1:"tab",
    //         t2:"toast"
    //     }
    // })
    
    // require(["jq","t1","t2"],(_,tab,toast)=>{
    // //	console.log(_)
        
    //     var adiv = $(".splb").children("div");
        
    //     var t1 = new tab.tab({
    //         div:adiv
    //     })
    //     t1.init();
        
        
    //     var t2 = new toast.toast({
    //         li:t1.li,
    //         child:t1.child
    //     })
    //     t2.init()       
    // })
    