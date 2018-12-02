
//获取ajax发送的url
function getUrl(a){
  var url = 'http://192.168.27.48:9090/api/' + a;
  return url;
}

//获取地址栏参数
function getValue(){
  var str = location.search;
  var arr = str.split('=');
  return arr[1];
}


//获取数字
function getNum(ele){
  ele.forEach(function(v,i){
    var comment = v.productComCount;
    comment = comment.replace(/\D*/g,'');
    v.comment = comment;
  })
}

