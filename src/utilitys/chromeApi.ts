/* global chrome */

export const setChromeStorageLocal = (obj:Object, callback:(...args:any) => void) => {
  chrome.storage.local.set(obj, callback)
}

export const setChromeStorageSync = (obj:Object, callback:(...args:any) => void) => {
  chrome.storage.sync.set(obj, callback)
}

export const getChromeStorageLocal = (key:string, callback:(...args:any) => void) => {
  chrome.storage.local.get(key, (res) => {
    callback(res)
  })
}

export const getChromeStorageSync = (key:string, callback:(...args:any) => void) => {
  chrome.storage.sync.get(key, (res) => {
    callback(res)
  })
}

export const closeTab = () => chrome.tabs.getCurrent((tab) => {
  if (tab && tab.id) chrome.tabs.remove(tab.id, () => {})
})
