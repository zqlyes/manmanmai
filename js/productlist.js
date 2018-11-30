$(function(){
  var url = location.search;
  var arr = url.split('=');
  var categoryId = arr[1];

  

  $.ajax({
    type: 'get',
    url: getUrl('getcategorybyid'),
    data: {
      categoryid: categoryId,
    },
    dataType: 'json',
    success: function(info){
      console.log(info);

      // var categoryName = {};
      // categoryName[info.result[0].categoryId] = info.result[0].category;
      // var str = JSON.stringify(categoryName);
      localStorage.setItem('categoryName',info.result[0].category);
      
      var htmlstr = template('titleTemp',info);
      $('.title').html(htmlstr);
    }
  })
  
  

  var currentPage = 1;
  var maxPage;

  function render(){
    $.ajax({
      type: 'get',
      url: getUrl('getproductlist'),
      data:{
        categoryid: categoryId,
        pageid: currentPage,
      },
      dataType: 'json',
      success: function(info){
        console.log(info);

        var obj = {};
        info.result.forEach(function(v,i){
          var name = v.productId;
          var value = v.productCom.replace(/\D*/g,'');
          obj[name] = value;
        });

        var str = JSON.stringify(obj);
        localStorage.setItem('comment',str);

        maxPage = Math.ceil(info.totalCount / info.pagesize);
        info.maxPage = maxPage;

        console.log(currentPage,maxPage);
        
        var htmlstr = template('prolistTemp',info);
        $('.product').html(htmlstr);
        
        if(maxPage == 1){
          $('.up').prop('disabled',true);               
          $('.down').prop('disabled',true);                    
        } 

        if(currentPage <= 1){
          $('.up').prop('disabled',true);               
        }else if(currentPage >= maxPage){
          $('.down').prop('disabled',true);
        }else{
          $('.down').removeAttr('disabled');
          $('.up').removeAttr('disabled'); 
        }

        $('.product_footer select').val(currentPage);
      }
    })
  }
  
   render();

  
  //上一页
  $('.mm_productlist').on('click','.up',function(){
    currentPage--;
    render();
  })

  //下一页
  $('.mm_productlist').on('click','.down',function(){
    currentPage++;
    render();
  })

  //点击获取固定页
  $('.mm_productlist').on('change','select',function(){
    var value =  $(this).children(':selected').attr('value');
    currentPage = value;
    render();
  })

})