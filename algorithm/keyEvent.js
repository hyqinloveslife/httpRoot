/**
 * Created by Administrator on 2017/1/10 0010.
 */

var box=$('#box');
var game=$("#game");
var mOffsetLeft=box[0].offsetLeft;
var mOffsetTop=box[0].offsetTop;
var mHeight=box[0].offsetHeight;
var mWidth=box[0].offsetWidth;
var gameHeight=game[0].offsetHeight;
var gameWidth=game[0].offsetWidth;



//获取当前元素的位置
function getThisPosition() {
    console.log("上边距： "+mOffsetTop);
    console.log("左边距： "+mOffsetLeft);
}

//方向上键
function up () {
    console.log(box);
    if(mOffsetTop<=0){
        console.log("无法移动");
        return;
    }
    mOffsetTop-=10;
    box.animate({'margin-top':mOffsetTop});
    getThisPosition();
    console.log("up")
}
//↓
function down () {
    if(mOffsetTop>=gameHeight-mHeight){
        console.log("无法移动");
        return;
    }
    mOffsetTop+=10;
    box.animate({'margin-top':mOffsetTop});
    // box.fadeOut();
    console.log("down")
    getThisPosition();
}
//←
function left () {
    if(mOffsetLeft<=0){
        console.log("无法移动");
        return;
    }
    mOffsetLeft-=10;
    box.animate({'margin-left':mOffsetLeft});
    getThisPosition();
    // box.fadeIn()
    console.log("left")
}
//→
function right () {
    if(mOffsetLeft>=gameWidth-mWidth){
        console.log("无法移动");
        return;
    }
    console.log(mOffsetLeft);
    mOffsetLeft+=10;
    box.animate({'margin-left':mOffsetLeft});
    getThisPosition();
    console.log("right")
}
//运动
 function jump (event) {
     // console.log(event);
     if(event.keyCode==37){
         left();
         return;
     }
     if(event.keyCode==38){
         up();
         return;
     }
     if(event.keyCode==39){
         right();
         return;
     }
     if(event.keyCode==40){
         down();
         return;
     }

 }
document.onkeydown=jump;
