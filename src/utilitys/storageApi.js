export const setLocalStorage = (obj, callback) => {
  for (const data of Object.entries(obj)) {
    try {
      localStorage.setItem(data[0], data[1])
    } catch (e) {
      alert(e)
    } finally {
      callback()
    }
  }
}

const isBoolean = (arg) => {
  return typeof arg === 'boolean' || arg === 'true' || arg === 'false'
}

const strToBoolean = (arg) => {
  return arg === 'true' ? true : arg === 'false' ? false : arg
}

export const getLocalStorage = (dummy, callback) => {
  const tmp = ['customerID', 'userID', 'focusPassword']
  const obj = {}
  for (const key of tmp) {
    const res = localStorage.getItem(key)
    obj[key] = isBoolean(res) ? strToBoolean(res) : res
  }
  callback(obj)
}
