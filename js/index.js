/**
 * Created by Administrator on 2017/11/10.
 */
$(function () {

    //  设置页面的移动
   var container = $('.content'),
       element = $('.content-wrap'),
       slids = $('.content-wrap li'),
       Width = container.width(),
       Height = container.height();
   element.css({width:slids.length*Width+'px',height:Height+'px'});
   $.each(slids,function (index) {
       var slide = slids.eq(index);
       slide.css({width:Width+'px',height:Height+'px'});
   });
   $('.button').on('click',function () {
       element.css({
           'transition-timing-function': 'linear',
           'transition-duration': '5000ms',
           'transform': 'translate3d(-' + (Width * 2) + 'px,0px,0px)' //设置页面X轴移动
       });
   });

   //  设置小男孩的移动以及位置
   var $boy = $('.boy');
   $('.btn').on('click',function () {
       // 小男孩开始运动
       $('.boy').addClass('walking');
       // 使用插件实现小男孩的前进
       $boy.transition({
           'left': container.width() + 'px'
       },10000,'linear',function () {});
   });
   // 小男孩停止前进和运动
    $('.btnStop').click(function () {
        var Left = $boy.position().left;
        $boy.addClass('walkpaused');
        $boy.css({left:Left});
    });
    // 小男孩恢复运动
    $boy.removeClass('walkpaused');
});