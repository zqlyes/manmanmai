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

      var htmlstr = template('proTemp',info);
      $('.main ul').html(htmlstr);
    }
  })

  $('.main').on('click','li',function(){
    
  })
})