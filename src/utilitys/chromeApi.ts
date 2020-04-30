/* global chrome */

export const isChrome = () => {
  return Boolean(chrome.storage)
}

export const setChromeStorageLocal = (obj:object, callback:(...args:any) => void) => {
  chrome.storage.local.set(obj, callback)
}

export const setChromeStorageSync = (obj:object, callback:(...args:any) => void) => {
  chrome.storage.sync.set(obj, callback)
}

export const getChromeStorageLocal = (key:string | null, callback:(...args:any) => void) => {
  chrome.storage.local.get(key, (res) => {
    callback(res)
  })
}

export const getChromeStorageSync = (key:string | null, callback:(...args:any) => void) => {
  chrome.storage.sync.get(key, (res) => {
    callback(res)
  })
}

export const closeChromeTab = () => chrome.tabs.getCurrent((tab) => {
  if (tab && tab.id) chrome.tabs.remove(tab.id, () => {})
})
