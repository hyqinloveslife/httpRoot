/**
 * Created by Administrator on 2017/1/10 0010.
 */

window.onload=function () {
    // test1();
    // test2();
    // test3();
    var str='i am chinese,i love my county,and i love you.';
    findMaxDuplicateChar(str);
}

//经过测试，发现map遍历的速度最快，41ms
function test1 () {
    var arr=[1,2,3,4,5,6,7,8,9,10];

    arr.map(function (i) {
        console.log(i);
    })
}

//54ms
function test2 () {
    var arr=[1,2,3,4,5,6,7,8,9,10];

    arr.forEach(function (i) {
        console.log(i);
    })
}

//56ms
function test3 () {
    var arr=[1,2,3,4,5,6,7,8,9,10];

    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

//统计一个字符串出现最多的字母
function findMaxDuplicateChar (str) {
    if(str.length==1){
        return str;
    }
    var charObj={};
    for(var i=0;i<str.length;i++){
        //console.log(str.charAt(i));
        if(!charObj[str.charAt(i)]){
            charObj[str.charAt(i)]=1;
        }else{
            charObj[str.charAt(i)]++;
        }
    }
    console.log(charObj);
}

