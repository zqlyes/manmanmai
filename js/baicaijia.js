$(function(){
  
  // 标题渲染
  $.ajax({
    type: 'get',
    url: getUrl('getbaicaijiatitle'),
    dataType: 'json',
    success: function(info){
      console.log(info);

      var htmlstr = template('titTemp',info);
      $('.title ul').html(htmlstr);

      var ul = document.querySelector('.wrapper ul');
      var lis = ul.children;
      var width = 0;
      for(var i = 0; i < lis.length; i++){
        width += lis[i].offsetWidth;
      }
      $('.wrapper ul').css('width',width);
      var myscroll = new IScroll(".wrapper",{
        scrollX: true,
        scrollY: false
      });
    }
  })

  var titleid = 0;
  // 根据标题id发送ajax请求，获取商品信息
  function render(){
    
    $.ajax({
      type: 'get',
      url: getUrl('getbaicaijiaproduct'),
      dataType: 'json',
      data: {
        titleid: titleid,
      },
      success: function(info){
        console.log(info);

        var htmlstr = template('proTemp',info);
        $('.product ul').html(htmlstr);
      }
    })

  }

  render();

  // 标题点击事件
 
  $('.title').on('click','a',function(){
    $(this).parent().siblings().find('a').removeClass('current');
    $(this).addClass('current');
    
    titleid = $(this).data('id');
    console.log(titleid);
   
    render();
    
    
  })



  
})