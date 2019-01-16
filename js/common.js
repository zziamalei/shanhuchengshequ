let apiPath='http://193.112.82.47:8888';
// let apiPath='http://localhost:8888';

let tagList=[{"name":"水电","value":"shuidian"},{"name":"建材","value":"jiancai"},{"name":"家具","value":"jiaju"},{"name":"家纺","value":"jiafang"},{"name":"家电","value":"jiadian"},{"name":"开锁","value":"kaisuo"},{"name":"回收","value":"huishou"},{"name":"保洁","value":"baojie"},{"name":"空气净化","value":"kongqi"},{"name":"疏通","value":"shutong"},{"name":"配送","value":"peisong"},{"name":"煤气","value":"meiqi"},{"name":"桶装水","value":"shui"},{"name":"粮油副食","value":"liangyou"},{"name":"月嫂","value":"yuesao"},{"name":"搬家","value":"banjia"},{"name":"学校","value":"xuexiao"},{"name":"其他","value":"qita"}];

function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}