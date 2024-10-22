/*
 * Домашнее задание: реализуйте функции sum, mul и avg
 */
module.exports = {
  sum: function () {
    let s = 0;
    for (let arg of arguments) s += arg;
    return s;
  },
  mul: function () {
    let p = 1;
    for (let arg of arguments) p *= arg;
    return p;
  },
  avg: function () {
    let s = 0;
    for (let arg of arguments) s += arg;
    return s;
  },
};
