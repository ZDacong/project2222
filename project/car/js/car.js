
    function Car(){
        this.tbody = document.querySelector("tbody");
        this.odiv = document.querySelector(".wu");
        this.url = "http://localhost:8181/project/data/goods.json";
        
        this.init();
        this.addEvent();//绑定删除事件
    }
    Car.prototype.addEvent = function(){
        var that = this;
        this.tbody.onclick = function(){
            //console.log(1);
            if(event.target.className == "del"){
                that.id=event.target.parentNode.getAttribute("index");
                //console.log(id);

                event.target.parentNode.remove();//删除DOM元素

                that.setData(function(i){
                    that.goods.splice(i,1);
                });  // 删除localstorage的数据
            }
        }
        this.tbody.oninput = function(){
            if(event.target.className == "changeNum"){
                that.id = event.target.parentNode.parentNode.getAttribute("index");
                // 修改localstorage的数据
                that.setData(function(i){
                    that.goods[i].num = event.target.value;
                });
            }
        }
    }
    Car.prototype.setData=function(callback){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                // 执行回调函数
                callback(i);
            }
        }
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }
    Car.prototype.init=function(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.getData();
        })
    }
    Car.prototype.getData=function(){
        	this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
        	this.display();
        }
    Car.prototype.display=function(){
        var str = "";
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res[i].goodsId == this.goods[j].id){
                    str += `<tr index="${this.res[i].goodsId}">
                                <td><input type="checkbox" id="checkbox"></td>
                                <td><img src="${this.res[i].src}" alt=""></td>
                                <td>${this.res[i].name}</td>
                                <td>${this.res[i].price}</td>
                                <td><input type="number" value="${this.goods[j].num}" min=1 class="changeNum"></td>
                                <td>${"￥"+(this.res[i].price.replace("￥","")*this.goods[j].num)}</td>
                                <td class="del">X</td>
                                <td class="jie"><a href="http://localhost:8181/project/car/jiesuan.html">去结算</a></td>
                            </tr>`;
                            this.odiv.style.display = "none";
                    
                }
            }
            this.tbody.innerHTML = str;
        }
        
    }
    new Car;











        // new Car(); 
        // function arithmetic() {
        //     this.all = 0;
        //     for (let i = 0; i < this.check.length; i++) {
        //         if (this.check[i].checked) {
        //             this.ls = this.check[i].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        //             this.all += this.ls.innerHTML * this.ls.nextElementSibling.children[0].value;
        //         }
        //     }
        //     this.priceAll.innerHTML = this.all + "元";
        // }
        // function changecookie() {
        //     this.myls = 0;
        //     for (let i = 0; i < this.cook.length; i++) {
        //         if (this.id == this.cook[i].id) {
        //             if (this.remove == 1) {
        //                 this.cook.splice(i, 1);
        //                 this.remove = 0;
        //                 this.myls = 1;
        //             } else {
        //                 if (this.cook[i].num != this.num) {
        //                     this.myls = 1;
        //                     this.cook[i].num = this.num;
        //                     break;
        //                 }
        //             }
    
        //         }
        //     }
        //     if (this.myls) {
        //         setCookie("goods", JSON.stringify(this.cook));
        //         this.myls = 0;
        //     }
        // }
        // function addEvent() {
        //     this.onoff = 0;
        //     this.tbody.onclick = (eve) => {
        //         let e = eve || window.event;
        //         let target = e.target || e.srcElement;
    
        //         //点击全选
        //         if (target.className == "all") {
        //             if (target.checked == false) {
        //                 console.log(target, this.check[0]);
        //                 for (let i = 0; i < this.check.length; i++) {
        //                     this.check[i].checked = false;
        //                 }
        //             }else {
        //                 for (let i = 0; i < this.check.length; i++) {
        //                     this.check[i].checked = true;
        //                 }
        //             }
        //         }
        //     }
        // }    

       
    
    

    
