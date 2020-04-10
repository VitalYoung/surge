let body = $response.body;
let obj = JSON.parse(body);
let list = obj['data']
let res = {}
if (list instanceof Array) {
  let i = 0;
  for(i=0; i<list.length; ++i) {
    if (list[i].type != 'common_card') {
      list.shift(i);
    }
  }
  res = JSON.stringify(list);
}

$done({body: res});
