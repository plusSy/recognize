/**
 * 图片信息 JSON数据比较
 * @param {JSON} oldFileData 
 * @param {JSON} newFileData 
 * @returns {Object} 第一个不同点的信息
 */
function compare (oldFileData, newFileData) {
  let oldWordsResult = JSON.parse(oldFileData).words_result;
  let newWordsResult = JSON.parse(newFileData).words_result
  let obj = {};

  for (let x = 0; x < newWordsResult.length; x++) {
    for (let y = 0; y < oldWordsResult.length; y++) {
      if (newWordsResult[x].words === oldWordsResult[y].words) {
        if (newWordsResult[x].location.top === oldWordsResult[y].location.top) {
          if (newWordsResult[x].location.left === oldWordsResult[y].location.left) {
            obj.isDifferent = false;
            return obj;
          } else {
            obj = {...newWordsResult[x], isDifferent: true};
            return obj;
          }
        } else {
          obj = {...newWordsResult[x], isDifferent: true};
          return obj;
        }
      } else {
        obj = {...newWordsResult[x], isDifferent: true};
        return obj;
      }
    } 
  }

  return obj;
}

module.exports.compare = compare;