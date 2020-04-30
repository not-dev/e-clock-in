import { closeChromeTab, getChromeStorageLocal, isChrome, setChromeStorageLocal } from './chromeApi'
import { getLocalStorage, setLocalStorage } from './storageApi'

const saveOptions = isChrome() ? setChromeStorageLocal : setLocalStorage
const loadOptions = isChrome() ? getChromeStorageLocal : getLocalStorage
const closeTab = isChrome() ? closeChromeTab : () => { alert('close') }

export { saveOptions, loadOptions, closeTab }
