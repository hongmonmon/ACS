const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('listening on 8080')
});

//누군가가 /pet 으로 방문을 하면..
//pet 관련 안내문을 띄워주자

app.get('/pet',function(req,res){
    res.send('펫용품 쇼핑을 할 수 있는 페이지 입니다.');
});