$(function(){

  //商品信息渲染
  $.ajax({
    type: 'get',
    url: getUrl('getproduct'),
    data: {
      productid: getValue(),
    },
    dataType: 'json',
    success: function(info){
      console.log(info);
      console.log(info.result[0].productId);

      //获取分类名
      var categoryName = localStorage.getItem('categoryName');
      info.categoryName = categoryName;    
      
      //获取评论数
      var comment = localStorage.getItem('comment');
      comment = comment.replace(/\D*/g,'');
      info.comment = comment;
     
      
      var htmlstr = template('proTemp',info);
      $('.product').html(htmlstr);
  
    }
  })

  //用户评论渲染
  $.ajax({
    type: 'get',
    url: getUrl('getproductcom'),
    data: {
      productid: getValue(),
    },
    dataType: 'json',
    success: function(info){
      console.log(info);

      var htmlstr = template('comTemp',info);
      $('.info_content ul').html(htmlstr);
    }
  })
})