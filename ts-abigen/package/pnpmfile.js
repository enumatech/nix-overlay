module.exports = {
  hooks: {
    readPackage
  }
}

const packageJSON = require('./package.json')

function readPackage (pkg) {
  // Break circular dependencies
  if (pkg.name === '@types/prop-types') {
    delete pkg.dependencies['@types/react']
  }
  // Add missing typescript dependency
  if (pkg.name === 'dts-generator') {
    pkg.dependencies['typescript'] = packageJSON['dependencies']['typescript']
  }
  return pkg
}
