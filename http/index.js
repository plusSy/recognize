/**
 * @author: syl
 * @data: 2019/03/18
 * @descript: 后台请求config
 */

var HttpClient = require("baidu-aip-sdk").HttpClient;

// 设置request库的一些参数，例如代理服务地址，超时时间等
// request参数请参考 https://github.com/request/request#requestoptions-callback
HttpClient.setRequestOptions({
  timeout: 2000
});

// 也可以设置拦截每次请求（设置拦截后，调用的setRequestOptions设置的参数将不生效）,
// 可以按需修改request参数（无论是否修改，必须返回函数调用参数）
// request参数请参考 https://github.com/request/request#requestoptions-callback
HttpClient.setRequestInterceptor(function(requestOptions) {
    // 修改参数
    requestOptions.timeout = 5000;
    // 返回参数
    return requestOptions;
});

module.exports = HttpClient
