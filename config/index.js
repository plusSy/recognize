/**
 * @author: syl
 * @date: 2019/03/18
 * #descript: 基础变量全局配置
 */
const APP_ID = '15778700';
const API_KEY  = 'IXBhYDN9SLCMuq8h9VeEET8m';
const SECRET_KEY  = 'KWdUvVjuQsFMmhpIEHlAW0zqdrhVZE3V';
const IMG_OPTIONS = {
  recognize_granularity: 'big',
  language_type: 'CHN_ENG',
  detect_direction: 'true',
  detect_language: 'true',
  vertexes_location: 'false',
  probability: 'false'
};

module.exports = {
  APP_ID,
  API_KEY,
  SECRET_KEY,
  IMG_OPTIONS
}