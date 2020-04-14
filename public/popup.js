const asyncSetTimeout = (msec, func = () => { }) => {
  let timeoutId
  let r
  const exec = () => new Promise((resolve) => {
    r = resolve
    timeoutId = setTimeout(async () => {
      timeoutId = null
      await func()
      resolve()
    }, msec)
  })
  return {
    exec,
    cancel: () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
        r()
      }
    }
  }
}

window.addEventListener('load', () => {
  const rippleElements = document.getElementsByClassName('button')
  for (const rippleElement of rippleElements) {
    let timer = 0
    const setTimer = () => { timer = 1 }
    const resetTimer = () => { timer = 0 }
    rippleElement.addEventListener('mousedown', (e) => {
      setTimer()
      if (rippleElement.children.length > 0) {
        rippleElement.firstElementChild.remove()
      }
      const buttonSize = e.target.clientWidth
      const rippleDiv = document.createElement('div')
      rippleDiv.classList.add('ripple')
      rippleDiv.setAttribute('style',
      `width: ${buttonSize * 2}px;
      height: ${buttonSize * 2}px;
      top: ${e.offsetY - buttonSize}px;
      left: ${e.offsetX - buttonSize}px;`
      )
      rippleElement.appendChild(rippleDiv)
      const on = asyncSetTimeout(200, resetTimer)
      on.exec()
    })
    rippleElement.addEventListener('mouseup', (e) => {
      const removeRipple = () => {
        const rippleDiv = e.target.lastElementChild
        rippleDiv.classList.add('ripple-off')
        const rm = asyncSetTimeout(400, () => rippleDiv.remove())
        rm.exec()
      }
      if (timer) {
        const off = asyncSetTimeout(200, removeRipple)
        off.exec()
      } else {
        removeRipple()
      }
    })
  }
  document.getElementById('getStarted').addEventListener('click', () => {
    window.open('options/index.html', '_blank', 'noopener')
  })
})
