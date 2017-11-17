/**
 * Created by Administrator on 2017/11/10.
 */
$(function () {
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
   $('button').on('click',function () {
       element.css({
           'transition-timing-function': 'linear',
           'transition-duration': '5000ms',
           'transform': 'translate3d(-' + (Width * 2) + 'px,0px,0px)' //设置页面X轴移动
       });
   })
});