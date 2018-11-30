$(function(){
  $.ajax({
    type: 'get',
    url: getUrl('getdiscountproduct'),
    data:{
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