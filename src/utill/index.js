/**
 * @author: syl
 * @date: 2019/03/18
 * @description: 公共方法
 */

var fs = require('fs');

let FileEdit = {
  read: function (source) {
    fs.readFile(source, function (err, data) {
     if (!err) {
      data = JSON.parse(data.toString());
      return data
     } else {
       console.log(err)
     }
    })
  },
  write: function (source, data) {
    data = JSON.stringify(data);
    fs.writeFile(source, data, function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('保存成功')
      }
    })
  }
};

module.exports = FileEdit