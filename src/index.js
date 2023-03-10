console.log('%c HELLO', 'color: firebrick')

function ceo(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImg(json))
}

function loadBreeds(){
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json))
}

function renderImg(images) {
    const location = document.querySelector('div')
    images.message.forEach(Image => {
      const img = document.createElement('img');
      img.src = Image;
      location.appendChild(img)
    });
  }


function renderBreeds(breeds) {
  allBreeds = Object.keys(breeds.message)
  allBreeds.forEach(breedName => {
    const ul = document.createElement('li')
    const location = document.getElementById('dog-breeds')
    ul.innerHTML = breedName;
    location.appendChild(ul)
    console.log(breedName)
   })
}


document.addEventListener('DOMContentLoaded', () => {
    ceo()
    loadBreeds()
  })


let liBreedSelect = document.getElementById("dog-breeds")
liBreedSelect.addEventListener('click', (evt) => {
  evt.target.style.color = "#ff69b4"
})



