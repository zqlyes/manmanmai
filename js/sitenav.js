$(function(){
  $.ajax({
    type:'get',
    url: getUrl('getsitenav'),
    dataType: 'json',
    success: function(info){
      console.log(info);

      var htmlstr = template('siteTemp',info);
      $('.main ul').html(htmlstr);
    }
  })
})