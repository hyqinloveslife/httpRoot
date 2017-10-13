/**
 * Created by Administrator on 2017/1/25 0025.
 */
//函数闭包的写法
var fun=(function() {
   var _bind=function (obj) {
       obj.input.addEventListener('keyup',function () {
           obj.render();
           obj.say();
       });
   }
   var _getValue=function (obj) {
       return obj.input.value;
   }
   var inputFun=function (config) {}

    //自定义方法
   inputFun.prototype.say=function () {
       console.log("just say hello");
   }

   //暴露出去的接口
   inputFun.prototype.init=function (config) {
       this.input=document.getElementById(config.id);
       _bind(this);
       return this;
   }
   //渲染的函数
   inputFun.prototype.render=function () {
       var value=_getValue(this);
       if(!document.getElementById("show")){
           var append=document.createElement('span');
           append.setAttribute("id","show");
           input.parentNode.appendChild(append);
       }
       var show=document.getElementById("show");
       if(/^[0-9a-zA-Z]+$/.exec(value)){
           show.innerHTML="Pass";
       }else{
           show.innerHTML="Failed";
       }
   }
   return inputFun;

})();
window.onload=function () {
    var obj=new fun().init({id:'input'});
    console.log(obj);
}