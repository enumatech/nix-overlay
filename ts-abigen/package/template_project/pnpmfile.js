module.exports = {
  hooks: {
    readPackage
  }
}

const packageJSON = require('./package.json')

function readPackage (pkg) {
  // Get ride of huge babel dep chain
  if (pkg.name === 'json-rpc-engine') {
    delete pkg.dependencies['babelify']
    delete pkg.dependencies['babel-preset-env']
  }
  return pkg
}
