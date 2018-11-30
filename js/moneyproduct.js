$(function(){
  $.ajax({
    type: 'get',
    url: getUrl('getmoneyctrlproduct'),
    data: {
      productid: getValue(),
    },
    dataType: 'json',
    success: function(info){
      console.log(info);

      var htmlstr = template('proTemp',info);
      $('.content').html(htmlstr);
    }
  })
})