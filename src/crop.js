let { cropImg, cropCurrentImg, resizeImgWithArgs } = require('./utill/gm.js');


resizeImgWithArgs("../images/ocj_1.png","../result/resize_ocj_1.png", 100, 100);




// cropImg("../images/ocj_1.png", "../result/crop_ocj_1.png", 189.5, 814, 189.5, 0)