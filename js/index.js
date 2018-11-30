$(function(){

  //导航数据请求
  $.ajax({
    type: 'get',
    url: getUrl('getindexmenu'),
    dataType: 'json',
    success: function(info){
      console.log(info);

      var htmlstr = template('navTemp',info);
      $('.mm_nav ul').html(htmlstr);
      $('.mm_nav li:nth-last-child(-n+4)').addClass('hidden');
    }
  })


  $('.mm_nav').on('click','li:nth-child(8)',function(){
    $('.mm_nav li:nth-last-child(-n+4)').toggleClass('hidden');
  })


  //商品列表数据请求
  $.ajax({
    type: 'get',
    url: getUrl('getmoneyctrl'),
    dataType: 'json',
    success: function(info){
      console.log(info);
      getNum(info.result);
      var htmlstr = template('goodsTemp',info);
      $('.goods_list ul').html(htmlstr);
    }
  })

})