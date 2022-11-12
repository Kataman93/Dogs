
import data from './data.js'
import Dog from './Dogs.js'
const mainContent = document.getElementById('main-content')
const Rex = new Dog(data[0])
mainContent.innerHTML = Rex.getHtml()

let counter = 0
function getNewDog(like, nope){
   setTimeout(()=> {
         mainContent.innerHTML = new Dog(data[counter]).getHtml(like, nope)
   }, 800)

   setTimeout(()=> {
      counter++
      if(counter === data.length) {
         counter = data.length - 1
      } else {
         mainContent.innerHTML = new Dog(data[counter]).getHtml()
         mainContent.classList.add('img-opacity')
      }
   }, 2500)

   mainContent.classList.remove('img-opacity')    
}


document.querySelector('.heart').addEventListener('click', ()=> {
   getNewDog('visible', 'invisible')
})

document.querySelector('.cross').addEventListener('click', ()=> {
   getNewDog('invisible', 'visible')
})

