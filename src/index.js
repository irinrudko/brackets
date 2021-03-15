module.exports = function check(str, bracketsConfig) {
  for (let i = str.length; i >= 0; i--) {
    for (let j = 0; j < bracketsConfig.length; j++) {

      while (str.includes(bracketsConfig[j].join(''))) {
        str = str.replace(bracketsConfig[j].join(''), '');
      }
    }
  }
  return str === '' ? true : false;
};
