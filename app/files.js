const path = require('path')
const url = require('url')

const publicFolder = '../build'

/** Returns the formatted url of the given file */
const getStaticFileUrl = fileName => url.format({
    pathname: path.join(__dirname, publicFolder, fileName),
    protocol: 'file:',
    slashes: true,
})

/** Returns the location of the view to be used as an entry point */
const getEntryFileUrl = () => {
  return process.env.ELECTRON_START_URL || getStaticFileUrl('index.html')
}

module.exports = {
    getStaticFileUrl,
    getEntryFileUrl
}
