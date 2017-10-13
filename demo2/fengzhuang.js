/**
 * Created by Administrator on 2017/2/6 0006.
 */
$(function () {
    var url='source/data.json';
    var method='get';
    var data=null;
    console.time('1')
    getJsonData(url,method,data,successFn,errorFn);
    console.timeEnd('1');
    console.time('2');
    getJsonData(url,method,data,getSomeData,errorFn);
    console.timeEnd('2');
    // add();
    // addFragment();
    addByClass();
})

function addByClass() {
    //返回的是一个集合
    var clazz=document.getElementsByClassName('clazz1');
    // var clazz=document.getElementById('clazz1');
    var newDiv=document.createElement('div');
    var newTextNode=document.createTextNode('i love you');
    newDiv.style.width='200px';
    newDiv.style.height='100px';
    newDiv.style.background='orange';
    newDiv.setAttribute('id','app');
    newDiv.appendChild(newTextNode);
    for(var i=0;i<clazz.length;i++){
        clazz[i].appendChild(newDiv);
    }
    // clazz.append(newDiv);
}

function add() {
    var div1=document.getElementById('div1');
    var newBtn=document.createElement('input');
    var newDiv=document.createElement('div');
    var nextTextNode=document.createTextNode('this is a new Text');
    newBtn.type='button';
    newBtn.value='new button';
    newDiv.style.background='red';
    newDiv.style.width='200px';
    newDiv.style.height='200px';
    newDiv.setAttribute('id','aaabb');
    newDiv.setAttribute('class','bbaaa');
    div1.appendChild(newBtn);
    div1.appendChild(newDiv);
    div1.appendChild(nextTextNode);
}

function addFragment(){
    var div1 = document.getElementById("div1");
    var newButton = document.createElement("input");
    newButton.type = "button";
    newButton.value = "newButton";
    var newTextNode = document.createTextNode("new Text");
    var newDocFragment = document.createDocumentFragment();
    newDocFragment.appendChild(newButton);
    newDocFragment.appendChild(newTextNode);
    div1.appendChild(newDocFragment);

}

function getJsonData(url,method,data,successFn,errorFn) {
    $.ajax({
        url:url.toString(),
        method:method,
        dataType:'json',
        data:data,
        success:function (result) {
            successFn(result);
        },
        error:function () {
            errorFn();
        }
    });
}
function successFn(result){
    console.log(result);
    console.time('time');
    $('#demo').html(JSON.stringify(result));
    console.timeEnd('time');
}

function getSomeData(result) {
    console.log('demo2');
    console.log(result);
    $('#demo2').html(JSON.stringify(result.slice(0,5)));
    // for(var i=0;i<result.length;i++){
    //     console.log(result[i]);
    // }
}

function errorFn () {
    console.log('error');
}