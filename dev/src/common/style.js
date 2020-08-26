export const getStyle = function(obj, attr) {
  // 哪个对象obj
  // 哪个属性attr
  // 兼容IE
  if (obj.currentStyle) {
    return obj.currentStyle[attr].replace('px', '');
  }
  // 兼容谷歌 火狐
  return getComputedStyle(obj, false)[attr].replace('px', '');
};
export const setStyle = function(obj, attr, value) {
  obj.style[attr] = value;
};
