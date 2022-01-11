

const ParentElement = document.querySelector('.animation__elements')
const Elements = Array.from(document.querySelectorAll('.animation__element'));


// console.log('window', document.documentElement.clientHeight);

function PositionElement(element, index, array) {

  let center = (element.getBoundingClientRect().top + element.getBoundingClientRect().bottom) / 2

  let elementPos = {
    bottom: window.pageYOffset + center
  }

  let windowPos = {
    bottom: window.pageYOffset + document.documentElement.clientHeight
  }

  if(elementPos.bottom < windowPos.bottom) {

      element.style.opacity = 1

      if (element.closest('.hide-element-left')) {
        element.classList.remove('hide-element-left')
      } 
      if (element.closest('.hide-element-right')) {
        element.classList.remove('hide-element-right')
      } 

    } else {


        if (index % 2 === 0) {

          array[index].classList.add('hide-element-left')

        } else {

          array[index].classList.add('hide-element-right')

        }
      
        element.style.opacity = 0 // д
    }
}


Elements.forEach((e, ind, arr) => {

    if(ind >= 3) {

      if(ind % 2 === 0) {

        arr[ind].classList.add('hide-element-left')

      } else {

        arr[ind].classList.add('hide-element-right')

      }
    }
})

window.addEventListener('scroll', () => {
  
  Elements.forEach((e, index, array) => {

    if(index >= 3) {
      
      PositionElement(e, index, array)
      
    }
  })


})



