$(function(){

  // 分类标题请求
  $.ajax({
    type: 'get',
    url: getUrl('getcategorytitle'),
    dataType: 'json',
    success: function(info){
      console.log(info);

      var htmlstr = template('titleTemp',info);
      $('.category_title').html(htmlstr);
      
    }
  })


  $('.category_title').on('click','.title',function(){
    var $id = $(this).data('id');
    
    $(this).parent().siblings().find('ul').removeClass('show');
    $(this).next('.category_content').toggleClass('hidden').addClass('show');
    
    if($(this).next('.category_content').hasClass('show')){

      if(!$(this).next('.category_content').hasClass('hidden')){
        //分类详情请求
        $.ajax({
          type: 'get',
          url: getUrl('getcategory'),
          data: {
            titleid: $id,
          },
          dataType: 'json',
          success: function(info){
            console.log(info);

            var htmlstr = template('contentTemp',info);
            $('.show').html(htmlstr);
          }
        })
      }
    }
  })

  
})