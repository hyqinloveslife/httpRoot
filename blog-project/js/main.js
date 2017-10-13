/**
 * Created by Administrator on 2016/12/20 0020.
 */

$(function () {
    'use strict';

    var sidebar=$('#side-bar'), //选择侧栏
        mask=$('.mask'),
        backButton=$('.back-to-top'),
        sidebarTrigger=$('#sidebar-trigger');

    getStory();

    $(window).on('scroll',function () {
        if($(window).scrollTop()>$(window).height()){
            backButton.fadeIn();
        }else{
            backButton.fadeOut();
        }
    })

    $(window).trigger('scroll');

    sidebarTrigger.on('click',showSideBar);
    mask.on('click',hideSideBar);
    backButton.on('click',back2Top);


    function showSideBar () {
        mask.fadeIn();
        sidebar.animate({'right':0})
    }

    function hideSideBar () {
        mask.fadeOut();
        sidebar.animate({'right':-sidebar.width()});
    }

})

//从文件中获取故事
function getStory () {
    $.ajax({
        method:'GET',
        url:'resouce/shalou.txt',
        dataType:'text',
        success:function (result) {
            // console.log(result)
            $('#story1').html(result)
        }
    })
}


function back2Top () {
    console.log('back to top');
    $('html,body').animate({
        scrollTop:0
    },800)
}