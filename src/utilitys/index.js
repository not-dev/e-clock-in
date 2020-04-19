/* import { setChromeStorageLocal as saveOptions, getChromeStorageLocal as loadOptions, closeTab } from './chromeApi' */
// import { setLocalStorage as saveOptions, getLocalStorage as loadOptions, closeTab } from './storageApi'

// export { saveOptions, loadOptions, closeTab }

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  const api = require('./chromeApi')
  exports.saveOptions = api.setChromeStorageLocal
  exports.loadOptions = api.getChromeStorageLocal
  exports.closeTab = api.closeTab
} else {
  const api = require('./storageApi')
  exports.saveOptions = api.setLocalStorage
  exports.loadOptions = api.getLocalStorage
  exports.closeTab = api.closeTab
}
