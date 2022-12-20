const arrowS = document.querySelector('.arrS')
const arrowH = document.querySelector('.arrH')
const arrowM = document.querySelector('.arrM')
const dotS = document.querySelector('.dotS')
const dotM = document.querySelector('.dotM')
const dotH = document.querySelector('.dotH')
const circleS = document.querySelector('.SS')
const circleM = document.querySelector('.MM')
const circleH = document.querySelector('.HH')
const numS = document.querySelector('.numS')
const numM = document.querySelector('.numM')
const numH = document.querySelector('.numH')

function clock(){
  const time = new Date()
  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  let hours = time.getHours()
  
  arrowS.style.transform = `rotate(${seconds * 6}deg)`
  arrowM.style.transform = `rotate(${minutes * 6}deg)`
  arrowH.style.transform = `rotate(${hours * 30 + (minutes/2)}deg)`
  
  dotS.style.transform = `rotate(${seconds * 6}deg)`
  circleS.style.strokeDashoffset = 440 - 440 * seconds / 60
  numS.innerHTML = seconds < 10 ? `0${seconds}` : seconds
  
  dotM.style.transform = `rotate(${minutes * 6}deg)`
  circleM.style.strokeDashoffset = 440 - 440 * minutes / 60
  numM.innerHTML = minutes < 10 ? `0${minutes}` : minutes
  
  numH.innerHTML = hours < 10 ? `0${hours}` : hours
  if(hours > 12) {hours = hours - 12}
  circleH.style.strokeDashoffset = 440 - 440 * hours / 12
  dotH.style.transform = `rotate(${hours * 30}deg)`
  
  setTimeout(clock, 1000)
}
clock()

// tabs
const links = document.querySelectorAll('.tabpanel__links a')
const items = document.querySelectorAll('.tabpanel__item')

links.forEach(function(link, key1){
  link.addEventListener('click', function(){
    links.forEach(function(link, key2){
      links[key2].classList.remove('active')
      items[key2].classList.remove('active')
    })
    links[key1].classList.add('active')
    items[key1].classList.add('active')
  })
})


//stopwatch
const startButton = document.querySelector('.start')
const resultButton = document.querySelector('.result')

const stopwatchDotS = document.querySelector('.stopwatch-dotS') 
const stopwatchDotM = document.querySelector('.stopwatch-dotM')
const stopwatchDotH = document.querySelector('.stopwatch-dotH')
const stopwatchS = document.querySelector('.stopwatch-SS')
const stopwatchM = document.querySelector('.stopwatch-MM')
const stopwatchH = document.querySelector('.stopwatch-HH')
const stopwatchNumS = document.querySelector('.stopwatch-numS')
const stopwatchNumM = document.querySelector('.stopwatch-numM')
const stopwatchNumH = document.querySelector('.stopwatch-numH')


startButton.addEventListener('click', function(){
  if(startButton.innerHTML == 'start'){
    startButton.innerHTML = 'stop'
    stopwatch(startButton,0,0,0)
  }
  else if(startButton.innerHTML == 'stop'){
    startButton.innerHTML = 'clear'
    
  }
  // else if(startButton.innerHTML == 'clear'{
  //   s = 0,
  //   m = 0,
  //   h = 0
  // }
  else if(startButton.innerHTML == 'clear'){
    startButton.innerHTML = 'start'
    stopwatch( stopwatchNumS.innerHTML = 00,
      stopwatchNumM.innerHTML = 00,
      stopwatchNumH.innerHTML = 00,
      stopwatchDotS.style.transform = `rotate(0deg)`,
      stopwatchDotM.style.transform = `rotate(0deg)`,
      stopwatchDotH.style.transform = `rotate(0deg)`,
      stopwatchS.style.strokeDashoffset = 440,
      stopwatchM.style.strokeDashoffset = 440,
      stopwatchH.style.strokeDashoffset = 440
      )
  }
  else{
    startButton.innerHTML == 'start'
  }
})

function stopwatch(btn, s,m, h){
  if(btn.innerHTML == 'stop'){
    if(s == 59){
      s = 0
      stopwatchDotS.style.transform = `rotate(${s*6}deg)`
      stopwatchS.style.strokeDashoffset = 440 - 440 * s / 60
      stopwatchNumS.innerHTML = s<10?`0${s}` :s
      if(m == 59){
        m = 0
        stopwatchDotM.style.transform = `rotate(${m*6}deg)`
        stopwatchM.style.strokeDashoffset = 440 - 440 * m / 60
        stopwatchNumM.innerHTML = m<10?`0${m}` :m
        
        if(h == 23){
          h = 0
          stopwatchDotH.style.transform = `rotate(${h*15}deg)`
          stopwatchH.style.strokeDashoffset = 440 - 440 * h / 24
          stopwatchNumH.innerHTML = h<10?`0${h}` :h
        }else{
          h++
          stopwatchDotH.style.transform = `rotate(${h*15}deg)`
          stopwatchH.style.strokeDashoffset = 440 - 440 * h / 24
          stopwatchNumH.innerHTML = h<10?`0${h}` :h
        }
      }else{
        m++
        stopwatchDotM.style.transform = `rotate(${m*6}deg)`
        stopwatchM.style.strokeDashoffset = 440 - 440 * m / 60
        stopwatchNumM.innerHTML = m<10?`0${m}` :m
        
      }
    }else{
      s++
      stopwatchDotS.style.transform = `rotate(${s*6}deg)`
      stopwatchS.style.strokeDashoffset = 440 - 440 * s / 60
      stopwatchNumS.innerHTML = s<10?`0${s}` :s
    }
    setTimeout(function(){
      stopwatch(btn,s,m,h)
    }, 10)
  }
  else if(stopwatch == 'clear'){
    stopwatchNumS.innerHTML = 00
    stopwatchNumM.innerHTML = 00
    stopwatchNumH.innerHTML = 00
  }
}


resultButton.addEventListener('click', () => {
  const resuls = document.querySelector('.stopwatch-result')
  const block = document.createElement('p')
  block.innerText = `Result: ${stopwatchNumH.textContent}:${stopwatchNumM.textContent}:${stopwatchNumS.textContent}`;
  resuls.append(block)
})
