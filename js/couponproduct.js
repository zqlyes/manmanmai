$(function(){

  $.ajax({
    type: 'get',
    url: getUrl('getcouponproduct'),
    dataType:'json',
    data: {
      couponid: getValue(),
    },
    dataType: 'json',
    success: function(info){
      console.log(info);
    

      info.result.forEach(function(v,i){
        var imgstr = v.couponProductImg;
        var arr = imgstr.split(' ');
        arr = arr[1].split('=');
        // console.log(arr);
        imgstr = arr[1];
        imgstr = imgstr.replace(/\"/g,'');  
        v.imgstr = imgstr;
      });
      
      var htmlstr = template('proTemp',info);
      $('.main ul').html(htmlstr);

      var htmlstr2 = template('swTemp',info);
      $('.swiper-wrapper').html(htmlstr2);
       
      var title = localStorage.getItem('coupon');
      $('.mm_header p').text(title);


    }
  })

  //打开蒙版
  $('.main').on('click','li',function(){
    $('.mengban').css('display','block');

    var id = $(this).data('id');
    
    var mySwiper = new Swiper ('.img_box', {
      loop: true, // 循环模式选项
      initialSlide: id,
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.right',
        prevEl: '.left',
      },
      
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })        
  })

  // 关闭蒙版
  $('.mengban .del').click(function(){
    $('.mengban').css('display','none');
  })
})