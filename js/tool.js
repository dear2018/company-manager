//公用的方法
//url地址
var baseURL="http://5amjtu.natappfree.cc"
//http://n6d22j.natappfree.cc
//这是高德地图的账号和密码 18691718766  zhaoliang5  key:afd119caa78a57c8340a89cac406b5a0	
//检测好13592589109
//返回上一页
function go() {
	window.history.go(-1);
}
//转换时间
function getLocalTime(nS) {  
    return new Date(nS).toLocaleString().replace(/:\d{1,2}$/,' ');  
   }
//正则 
//判断密码，手机号等
function vali(elem, reg, errMsg) {
    elem = $(elem);
    if(elem.val() == null || elem.val() == "" || !reg.test(elem.val())) {
        //将问题显示在页面上	
        console.log(errMsg);
        return false;
    } else if(reg.test(elem.val())) { //如果验证通过		
        console.log("正确");
        return true;
    }
}
//验证码倒计时
var count = (classSum) =>{
    $(classSum).text("60");
    var second = 60;
    var timer = setInterval(function() {
            second -= 1;
            if(second > 0){
                $(classSum).text(second);
                $(classSum).attr('disabled',"true");
            } else {
                $(classSum).text("获取验证码");
                $(classSum).removeAttr("disabled");//将按钮禁用
                clearInterval(timer);
            }		
        },1000);
}
//如何获取地址栏后面的信息
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

