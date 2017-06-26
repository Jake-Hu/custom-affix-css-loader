var _ = require('lodash');
module.exports = function(source, pre, suf) {
  var str = source;
  // 去掉{}内的内容
  str = str.replace(/\{([a]|[^a])+?\}/g, '');
  // 将类存入数组
  classArray = str.match(/\.[\w-_]+/g);
  // 数组去重复
  classArray = _.uniq(classArray);
  classArray.forEach(function(element, index) {
    // 替换原来的类
    source = source.replace(new RegExp(element + '([^\\w-_])','g'),
    '.' + pre + element.substring(1) + suf + '$1');
  });
  return source;
}