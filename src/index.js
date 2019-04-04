/**
 * @author: syl
 * @date: 2019/03/18
 * @descript: 入口文件
 */
var fs = require('fs');

let AipOcrClient = require("baidu-aip-sdk").ocr;
let { APP_ID, API_KEY, SECRET_KEY, IMG_OPTIONS } = require("../config/index.js");
let HttpClient = require('../http/index.js');
let FileEdit = require('./utill/index.js');

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);
client.HttpClient = HttpClient

// 本地图片
var image = fs.readFileSync("../images/ocj_1.png").toString("base64");

// 调用通用文字识别（含位置信息版）, 图片参数为本地图片
client.accurate(image, IMG_OPTIONS).then(function(result) {
  console.log(result)
  fs.writeFile('../result/localImg_9.json', JSON.stringify(result), function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('保存成功')
    }
  })

}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
})


if (false) {
  // 远程图片
  var url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552973672398&di=87d975f11829131085fc8dd93262e249&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201401%2F22%2F210553b2qqccml55avc5lq.jpg';
  // 调用通用文字识别（含位置信息版）, 图片参数为本地图片
  client.generalUrl(url, IMG_OPTIONS).then(function(result) {

    fs.writeFile('../result/networkImg.json', JSON.stringify(result), function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('保存成功')
      }
    })

  }).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
  })
}

