console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
// Fetches Random Image from URL
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(imgObject => slapRandomOnTheDOM(imgObject))
// Fetches all dog breed in url
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(breedObjects => slapBreedsOnTheDOM(breedObjects))
})


// RANDOM IMAGES SLAPPED TO BODY OF DOM
function slapRandomOnTheDOM(imgObject){
  imgObject.message.forEach((m) => {
    let img = document.createElement("img");
    let attr = document.createAttribute("src");
    attr.value = `${m}`
    img.setAttributeNode(attr)
    document.body.append(img);
  });
}
// console.log(ul);

function slapBreedsOnTheDOM(breedObjects){
  // Object.keys(breedObjects.message).forEach((breed) => {
  //   console.log(breed);
  // })
  for( breed in breedObjects.message) {
    const ul = document.querySelector("#dog-breeds")
    let li = document.createElement("li");
    li.innerText = `${breed}`
    li.addEventListener("click", () => {
      li.style.color = "red";
    })
    ul.append(li);
  }
}
