var misec = 0
var sec = 0
var min = 0
var hr = 0
var interval

var isRunning = false

function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit
  } else {
    return digit
  }
}
function threeDigits(digit) {
  if(digit>100){
    return digit
  }
  else if(digit>10){
    return "0" + digit
  }
  else if(digit < 9){
    return "00" + digit
  }
}
function start() {
  if (isRunning == false) {
    watch()
    interval = setInterval(watch, 1)
  }
  isRunning = true
}
function stop() {
  clearInterval(interval)
  isRunning = false
}
function reset() {
  clearInterval(interval)
  misec = 0
  sec = 0
  min = 0
  hr = 0
  isRunning = false
  document.getElementById('watch').innerHTML = `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec)}:${threeDigits(misec)}`
}

function watch() {
  misec++
  if (misec == 1000) {
    sec++
    misec = 0
  }
  if (sec == 60) {
    min++
    sec = 0
  }
  if (min == 60) {
    hr++
    min = 0
  }
  document.getElementById('watch').innerHTML = `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec)}:${threeDigits(misec)}`
}