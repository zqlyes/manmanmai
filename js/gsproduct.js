$(function(){


  // 京东下的分店数据
  $.ajax({
    type: 'get',
    url: getUrl('getgsshop'),
    dataType: 'json',
    success: function(info){
      console.log(info);

      var htmlstr = template('jdTemp',info);
      $('.jd').html(htmlstr);
    }
  })

   //华北下的分店数据
   $.ajax({
    type: 'get',
    url: getUrl('getgsshoparea'),
    dataType: 'json',
    success: function(info){
      console.log(info);

      var htmlstr = template('hbTemp',info);
      $('.hb').html(htmlstr);  
    }
  })


  $('.nav a:first-child').click(function(){
    $(this).toggleClass('current').siblings().removeClass('current');
    $('.ul_box .jd').siblings().css('display','none');
    if($(this).hasClass('current')){
      $('.ul_box .jd').css('display','block');           
    }else{
      $('.ul_box .jd').css('display','none');
    }
  })


  $('.nav a:nth-child(2)').click(function(){
    $(this).toggleClass('current').siblings().removeClass('current');
    $('.ul_box .hb').siblings().css('display','none');    
    if($(this).hasClass('current')){
      $('.ul_box .hb').css('display','block');     
    }else{
      $('.ul_box .hb').css('display','none');      
    }
  })


  $('.nav a:last-of-type').click(function(){
    $(this).toggleClass('current').siblings().removeClass('current');
    $('.ul_box .all').siblings().css('display','none');   

    if($(this).hasClass('current')){
      var val = $(this).text();
      $('.ul_box .all a').text(val);
      $('.ul_box .all').css('display','block');
    }else{
      $('.ul_box .all').css('display','none');      
    }
  })


  var shopid = 0;
  var areaid = 0;
  function render(){
    // 商品数据请求
    $.ajax({
      type: 'get',
      url: getUrl('getgsproduct'),
      data:{
        shopid: shopid,
        areaid: areaid,
      },
      dataType: 'json',
      success: function(info){
        console.log(info);

        var htmlstr = template('gsTemp',info);
        $('.pro_info ul').html(htmlstr);
      }
    })
  }
 
  render();

  $('.jd').on('click','a',function(){
    shopid = $(this).data('id');
    console.log(shopid);
    render();
    $('.nav a:first-child').removeClass('current');
    $('.ul_box .jd').css('display','none');
    $(this).prev().css('display','block').parent().siblings().find('i').css('display','none');  
  })

  $('.hb').on('click','a',function(){
    areaid = $(this).data('id');
    console.log(areaid);
    render();
    $('.nav a:nth-child(2)').removeClass('current');    
    $('.ul_box .hb').css('display','none'); 
    $(this).prev().css('display','block').parent().siblings().find('i').css('display','none');         
  })
})