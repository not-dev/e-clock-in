import { isChrome, setChromeStorageLocal, getChromeStorageLocal, closeChromeTab } from './chromeApi'
import { setLocalStorage, getLocalStorage } from './storageApi'

const saveOptions = isChrome() ? setChromeStorageLocal : setLocalStorage
const loadOptions = isChrome() ? getChromeStorageLocal : getLocalStorage
const closeTab = isChrome() ? closeChromeTab : () => { alert('close') }

export { saveOptions, loadOptions, closeTab }
