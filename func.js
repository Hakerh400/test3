'use strict';

module.exports = () => {
  debugger;
  console.log('ok');
  require('fs').writeFileSync('test.txt', 'ok');

  // throw new Error();
};