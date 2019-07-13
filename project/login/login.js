
    var ouser = document.getElementById("user");
    var opass = document.getElementById("pass");
    var ochk = document.getElementById("check");
    var obtn = document.getElementById("btn");
    
    var loginMsg = JSON.parse(getCookie("loginMsg"));
    console.log(loginMsg);
    ouser.value = loginMsg.tex1;
    opass.value = loginMsg.tex2;
    
    //绑定事件
    obtn.onclick = function(){
        //console.log(1);
        //console.log(ochk);
        var obj = {
            user:ot1.value,
            pass:ot2.value
        }
        setCookie("loginMsg",JSON.stringify(obj),{
            expires:7
        })
        alert("登录成功");
        window.location.href = "http://localhost:8181/project/index/index.html";
    }

