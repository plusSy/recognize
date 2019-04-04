/**
 * @author: syl
 * @date: 2019/03/18
 * @description: 公共方法
 */

var fs = require('fs');

let FileEdit = {
  read: function (source) {
    console.log('source', source)
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
  },
  /**
   * 同步读取文件
   * @param {String} 执行目录
   * @returns {JSON} 返回JSON文件内容 以 'utf-8' 编码
   */
  readfileSync: function (path) {
    var data = fs.readFileSync(`../${path}`, 'utf-8');
    return data
  },

  readImg : function (path, res) {
    fs.readFile(path,'binary',function(err,file){
      if(err){
        console.log(err);
        return ;
      }else{
        res.write(file,'binary');
        res.end();
      }
    });
  }
};

module.exports = FileEdit