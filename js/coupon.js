$(function(){

  $.ajax({
    type: 'get',
    url: getUrl('getcoupon'),
    dataType: 'json',
    success: function(info){
      console.log(info);

      var htmlstr = template('couponTemp',info);
      $('.main ul').html(htmlstr);
    }
  })
})