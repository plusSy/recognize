let gm = require('gm');
let fs = require('fs');

let imgConf = {
  size: {},
  baseUrl: '../images/ocj_1.png',
  writeUrl: '../result/draw_result.png'
};

gm(imgConf.baseUrl)
  .size((err, size) => {
    if (!err) {
      console.log(size);
      imgConf.size = size;
    } else {
      console.log(err)
    }
  })
  .write(imgConf.writeUrl, function (err) {
    console.log('write img')
    if (!err) {
      drawLine({x: imgConf.size.width / 2, y: 0}, {x: imgConf.size.width / 2, y: imgConf.size.height}, 10, imgConf.writeUrl)
    } else {
      console.log('write error', err)
    }
  })


/**
 * 
 * @param {*} startPoint 
 * @param {*} endPoint 
 * @param {*} weight 
 */
function drawLine (startPoint, endPoint, weight, imgUrl) {
  for (let x = startPoint.x; x > startPoint.x- weight; x--) {
    gm(imgUrl)
      .drawLine(x, startPoint.y, x, endPoint.y)
      .write(imgUrl, function (err) {
        if (!err) {
          console.log('success')
        }
      })
  }
}


