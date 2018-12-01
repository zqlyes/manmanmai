$(function(){
 
  $.ajax({
    type: 'get',
    url: getUrl('getbrandtitle'),
    dataType: 'json',
    success: function(info){
      console.log(info);
      var htmlstr = template('brandTemp',info);
      $('.rank_info ul').html(htmlstr);
    }
  })

  $('.rank_info').on('click','a',function(){
    var id = $(this).data('id');

    location.href = 'brand.html?brandtitleid=' + id;
  })
})