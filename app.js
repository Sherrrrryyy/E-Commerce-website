fetch("https://api.escuelajs.co/api/v1/products/")
    .then((data) => data.json())
    .then(result => {
        console.log(result, "result")

        UI(result)
    })
    .catch(error => {
        console.log("error", error)
    })


const UI = (items) => {
    let cardsParent = document.getElementById("cardsParent")
    for (var products of items) {

// console.log(products)

cardsParent.innerHTML += `<div class="card container m-5" style="width: 18rem;">
    <img src="${products.images[0]}" onclick="imageShow(this)" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${products.title}</h5>
    </div>
  </div>`
    }
}

var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var timer;


var h = 30
var m = 15
var s = 42

function startTimer() {
    timer = setInterval(()=>{
        s--
    seconds.innerHTML = s
    if (s === 0) {
        s = 60
        m--
        minutes.innerHTML = m + ":"
    } else if (m < 0) {
        m--
        m = 60
    } else if (m === 0) {
        h--
        hours.innerHTML = h +":"
    }
    }, 1000)
 
}

startTimer()

// fetch("https://api.escuelajs.co/api/v1/products/")
//     .then((data) => data.json())
//     .then(result => {
//         console.log("result", result)
//         // renderUI(result)
//     })
//     .catch(error => {
//         console.log("error", error)
//     })