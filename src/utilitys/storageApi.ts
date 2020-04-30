export const setLocalStorage = (obj:object, callback:(...args:any) => void) => {
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

const isBoolean = (arg:any) => {
  return (typeof arg) === 'boolean' || arg === 'true' || arg === 'false'
}

const strToBoolean = (arg:any) => {
  return arg === 'true' ? true : arg === 'false' ? false : arg
}

export const getLocalStorage = (dummy:any, callback:(...args:any) => void) => {
  const tmp = ['customerID', 'userID', 'focusPassword']
  const obj:{[k:string]:string} = {}
  for (const key of tmp) {
    const res = localStorage.getItem(key)
    obj[key] = isBoolean(res) ? strToBoolean(res) : res
  }
  callback(obj)
}
