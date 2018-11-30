$(function () {
  var currentPage = 1;
  var maxPage;

  function render(){
    $.ajax({
      type: 'get',
      url: getUrl('getmoneyctrl'),
      data: {
        pageid: currentPage,
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
  
        maxPage = Math.ceil(info.totalCount / info.pagesize);
        info.maxPage = maxPage;

        getNum(info.result);
  
        var htmlstr = template('proTemp', info);
        $('.moneyctrl_content').html(htmlstr);
  
  
        if (maxPage == 1) {
          $('.up').prop('disabled', true);
          $('.down').prop('disabled', true);
        }
  
        if (currentPage <= 1) {
          $('.up').prop('disabled', true);
        } else if (currentPage >= maxPage) {
          $('.down').prop('disabled', true);
        } else {
          $('.down').removeAttr('disabled');
          $('.up').removeAttr('disabled');
        }
  
        $('.goods_cate select').val(currentPage);
      }
    })
  }

  render();


  //上一页
  $('.moneyctrl_content').on('click', '.up', function () { 
    currentPage--;
    render();
  })

  //下一页
  $('.moneyctrl_content').on('click', '.down', function () {
    currentPage++;
    render();
  })

  //点击获取固定页
  $('.moneyctrl_content').on('change', 'select', function () {
    var value = $(this).children(':selected').attr('value');
    currentPage = value;
    render();
  })
})