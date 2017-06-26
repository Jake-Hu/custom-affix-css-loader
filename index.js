var loaderUtils = require('loader-utils');
var process_css = require('./lib/process_css');
var process_html = require('./lib/process_html');

module.exports = function(source, other) {
  if(this.cacheable) this.cacheable();
  // 获取前缀和后缀
  var query = loaderUtils.getOptions(this);
  var pre = query.pre? (query.pre + '-') : '';
  var suf = query.suf? ('-' + query.suf) : '';
  if (query.type === 'html') {
    source = process_html(source, pre, suf);
  } else if (query.type === 'css'){
    source = process_css(source, pre, suf);
  }
  this.callback(null, source, other);
};