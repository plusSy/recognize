var https = require('https');
var qs = require('querystring');
let { APP_ID, API_KEY, SECRET_KEY, IMG_OPTIONS } = require("../config/index.js");

const param = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': API_KEY,
    'client_secret': SECRET_KEY
});

https.get(
    {
        hostname: 'aip.baidubce.com',
        path: '/oauth/2.0/token?' + param,
        agent: false
    },
    function (res) {
        // 在标准输出中查看运行结果
        // let a = res.pipe(process.stdout);
        console.log(res);
    }
);