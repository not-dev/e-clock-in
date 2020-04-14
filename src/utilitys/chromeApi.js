/* global chrome */

export const setChromeStorageLocal = (obj, callback) => {
  chrome.storage.local.set(obj, callback)
}

export const setChromeStorageSync = (obj, callback) => {
  chrome.storage.sync.set(obj, callback)
}

export const getChromeStorageLocal = (key, callback) => {
  chrome.storage.local.get(key, (res) => {
    callback(res)
  })
}

export const getChromeStorageSync = (key, callback) => {
  chrome.storage.sync.get(key, (res) => {
    callback(res)
  })
}

export const closeTab = () => chrome.tabs.getCurrent((tab) => {
  chrome.tabs.remove(tab.id, () => { })
})
