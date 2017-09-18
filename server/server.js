// 主要提供接口
// /book?id=1 get post delete put

let http = require('http');
let url = require('url');
let fs = require('fs');
//我们对书的增删改查，操邹的都是book.json
http.createServer(function (req, res) {
  let {pathname, query} = url.parse(req.url, true);
  if (pathname === '/book') {
    let id = query.id;
    switch (req.method) {
      case 'GET':
        break;
      case 'POST':
        break;
      case 'DELETE':
        break;
      case 'PUT':
        break;
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
}).listen(4000);
