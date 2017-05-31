#!/usr/bin/env node
module.exports = function(input) {
  return input + ' covfefe';
}

if (require.main === module) {
  console.log(module.exports(process.argv.slice(2).join(' ')));
}
