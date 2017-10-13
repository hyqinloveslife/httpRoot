/**
 * Created by Administrator on 2017/2/7 0007.
 */

$(function () {
    //循环赋值
    var inputType=document.getElementsByTagName('input');
    console.log(inputType);
    for(var i=0;i<inputType.length;i++){
        inputType[i].addEventListener('click',showAlert);
    }
});

function showAlert() {
    console.log(event);
    var process=document.getElementById('process');
    var processContent=process.innerHTML;
    processContent+=event.target.value;
    process.innerHTML=processContent;

    if(event.target.value=='='){
        console.log('is come?');
        //写一个循环，当prcess.innerHTML的长度大于一时，一直循环
        // while(processContent.length>1){
        //
        // }
        if(processContent.indexOf('*')>0){
            //获取运算符的位置
            var firstIndex=processContent.indexOf('*');
            console.log(firstIndex);
            //将整个字符串都分开
            var strArray=processContent.split('*');


            var aNum=strArray[firstIndex-1];
            var bNum=strArray[firstIndex+1];

            console.log(aNum);
            console.log(bNum);
            alert(strArray);
        }

    }
}