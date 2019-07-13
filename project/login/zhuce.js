
    var ot1 = document.getElementById("tex1");
    var ot2 = document.getElementById("tex2");
    var ot3 = document.getElementById("tex3");
    var ot4 = document.getElementById("tex4");
    var ot5 = document.getElementById("tex5");
    var btn=document.getElementById("btn");
    
    var ochk = document.getElementById("check");

    var tex1=tex2=tex3=tex4=tex5=0;

    ot1.onfocus=function(){
        this.value="";
        this.innerHTML=this.value;
        ot1.style.color="black";
    }
    ot1.onblur=function(){
        var reg=/^[^\d][a-z0-9A-Z]{6,20}$/;
        if(reg.test(this.value)){
            this.nextElementSibling.innerHTML="成功!";
            tex1 = 1;
        }else{
            alert("用户名只能包含数字、字母、下划线，且不能以数字开头，长度在6-20位之间");
            tex1 = 0;
        }
    }
    //6~18位,数字，字母大小写，特殊符号
    ot2.onfocus=function(){
        this.value="";
        this.innerHTML=this.value;
        ot2.style.color="black";
    }
    ot2.onblur=function(){
        var reg = /^.{6,18}$/;
        if(!reg.test(this.value)){
            this.nextElementSibling.innerHTML="长度不符";
			tex2=0;
			return;
        }
        var num=az=ts=0;
			var numReg=/\d/;
			if(numReg.test(this.value)){
				num=1;
			}
			var azReg=/[a-zA-Z]/;
			if(azReg.test(this.value)){
				az=1;
			}
			var tsReg=/[^\da-zA-Z]/;
			if(tsReg.test(this.value)){
				ts=1;
			}
			switch(num+az+ts){
				case 1:
				    this.nextElementSibling.innerHTML="简单";break;
				case 2:
				    this.nextElementSibling.innerHTML="一般";break;
				case 3:
				    this.nextElementSibling.innerHTML="复杂";break;    
			}
			text2=1;
    }


    ot3.onfocus=function(){
        this.value="";
        this.innerHTML=this.value;
        ot3.style.color="black";
    }
    ot3.onblur=function(){
        //this.value=ot2.value;
        if(this.value === ot2.value){
            this.nextElementSibling.innerHTML = "成功!";
            tex3=1;
        }else{
            alert("您的二次密码输入有误，请输入相同密码");
            tex3 = 0;
        }
    }
    
    ot4.onfocus=function(){
        this.value="";
        this.innerHTML=this.value;
        ot4.style.color="black";
        }
    ot4.onblur = function(){
        var reg = /^1[3-9]\d{9}$/;
        if(reg.test(this.value)){
            this.nextElementSibling.innerHTML = "成功!";
            tex4 = 1;
        }else{
            alert("请输入正确的手机号");
            tex4 = 0;
        }
    }
    ot5.onfocus=function(){
        this.value="";
        this.innerHTML=this.value;
        ot5.style.color="black";
    }
    ot5.onblur=function(){
        var reg=/^[a-zA-Z0-9]{4}$/;
        if(reg.test(this.value)){
            this.nextElementSibling.innerHTML = "成功!";
            tex5 = 1;
        }else{
            alert("请输入正确的验证码");
            tex5 = 0;
        }
    }


    btn.onclick = function(){
        if(tex1 && tex2 && tex3 && tex4 && tex5){
            alert("提交成功")
        }else{
            if(tex1 == 0){
                alert("用户名输入失败")
            }
            if(tex3 == 0){
                alert("密码与上次不符")
            }
            if(tex4 == 0){
                alert("手机号失败")
            }
            if(tex5 == 0){
                alert("验证码失败")
            }
        }
        if(ochk.checked)
        	setCookie("loginMsg",JSON.stringify({tex1:ot1.value,tex2:ot2.value}),{
        		expires:7
        	})
        alert("注册成功");
        window.location.href = "http://localhost:8181/project/index/index.html";
    }
