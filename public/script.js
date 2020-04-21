/* global chrome */

const forms = document.getElementsByTagName('form') || []
const exec = (msec, func = () => { }) => new Promise((resolve) => {
  setTimeout(async () => {
    await func()
    resolve()
  }, msec)
})
for (const form of forms) {
  if (form.action.endsWith('/docroot/realm/login')) {
    chrome.storage.local.get(null, (options) => {
      if (options.customerID != null) {
        document.getElementsByName('customerCodeAlias')[0].value = options.customerID
      }
      if (options.userID != null) {
        document.getElementsByName('userCodeAlias')[0].value = options.userID
      }
      if (options.focusPassword) {
        document.getElementsByName('password')[0].focus()
      }
      if (options.fillPassword) {
        document.getElementsByName('password')[0].value = options.password
      }
      if (options.autoLogin) {
        exec(1400, () => {
          const cIdElem = document.getElementsByName('customerCodeAlias')[0]
          cIdElem.focus()
          const uIdElem = document.getElementsByName('userCodeAlias')[0]
          uIdElem.focus()
          const pswElem = document.getElementsByName('password')[0]
          pswElem.focus()
          const inputs = document.getElementsByTagName('input')
          if (cIdElem.value.length && uIdElem.value.length && pswElem.value.length) {
            for (const input of inputs) {
              if (input.type === 'submit') {
                input.focus()
                input.click()
              }
            }
          }
        })
      }
    })
  }
}
