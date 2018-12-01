$(function(){

  // 品牌排行数据
  $.ajax({
    type: 'get',
    url: getUrl('getbrand'),
    data: {
      brandtitleid: getValue(),
    },
    dataType:'json',
    success: function(info){
      console.log(info);

      var htmlstr = template('brandrankTemp',info);
      $('.rank ul').html(htmlstr);
    }
  })

  // 产品销量数据
  $.ajax({
    type: 'get',
    url: getUrl('getbrandproductlist'),
    data:{
      brandtitleid: getValue(),
      pagesize: 4,
    },
    dataType: 'json',
    success: function(info){
      console.log(info);

      var htmlstr = template('saleTemp',info);
      $('.product ul').html(htmlstr);


      // 评论数据
      $.ajax({
        type: 'get',
        url: getUrl('getproductcom'),
        data: {
          productid: $('.sale li a:first-child').data('id'),
        },
        dataType: 'json',
        success: function(info){
          console.log(info);

          var img = $('.sale li:first-child img').attr('src');
          var title = $('.sale li:first-child .info_title').text();

          info.img = img;
          info.title = title;

          var htmlstr = template('comTemp',info);
          $('.com').html(htmlstr);
        }
      })
    }
  })

  
})