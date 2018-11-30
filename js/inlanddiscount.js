$(function(){

  $.ajax({
    type: 'get',
    url: getUrl('getinlanddiscount'),
    dataType: 'json',
    success: function(info){
      console.log(info);

      info.result.forEach(function(v,i){
        v.productImg = v.productImg.replace('src','data-original');
      });

      // info.result[10].productImg = info.result[10].productImg.replace('src','data-original');    

      var htmlstr = template('disTemp',info);
      $('.main ul').html(htmlstr);

      $('.img_box img').attr('class','lazy');
      $('.img_box img').attr('width','300');
      $('.img_box img').attr('height','300');

      $('.img_box img.lazy').lazyload({
        placeholder: "./images/timg.gif", 
      })
    }
  })

  

})