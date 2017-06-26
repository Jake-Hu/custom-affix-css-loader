var _ = require('lodash');
module.exports = function(source, pre, suf) {
  // 将类存入数组
  var classArray = source.match(/class=\".+?\"/g);
  classArray = classArray.map(function (val) {
    return val.split('"')[1];
  });
  // 数组去重复
  classArray = _.uniq(classArray);
  classArray.forEach(function (element, index) {
    if (element.indexOf(' ') === -1) {
      source = source.replace(new RegExp('class="' + element + '"', 'g'),
      'class="' + pre + element + suf + '"');
    } else {
      var classes = element.split(' ');
      var classStr = '';
      classes.forEach(function(val) {
          classStr += pre + val + suf + ' ';
      });
      // 去掉最后的空格
      classStr = classStr.substring(0, classStr.length - 1);
      source = source.replace(new RegExp('class="' + element + '"', 'g'),
      'class="' + classStr + '"');
    }
  });
  return source;
}