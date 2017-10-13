/**
 * Created by Administrator on 2017/1/25 0025.
 */
//测试js的面向对象编程

var obj={
    input:null,
    //初始化并提供入口调用方法
    init:function (config) {
        this.input=document.getElementById(config.id);
        this.bind();
        return this;
    },

    //绑定
    bind:function () {
        var self=this;
        this.input.addEventListener('keyup',function () {
            self.render();
        });
    },

    getValue:function () {
        return this.input.value;
    },

    //渲染
    render:function () {
      var value=this.getValue();
        if(!document.getElementById("show")){
            var append=document.createElement('span');
            append.setAttribute("id","show");
            input.parentNode.appendChild(append);
        }
        var show=document.getElementById("show");
        if(/^[0-9a-zA-Z]+$/.exec(value)){
            show.innerHTML="Pass!";
        }else{
            show.innerHTML="Failed";
        }
    }
}

window.onload=function () {
    obj.init({id:"input"});
}