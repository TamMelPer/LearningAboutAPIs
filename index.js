let quotesDiv = document.getElementById('quotes')

fetch('https://api.kanye.rest')
.then((res) => res.json())
.then(quote => {
    quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
})

let catButton = document.getElementById('give-cat')

catButton.addEventListener("click", evt => {
    let catDiv = document.getElementById('cat-pic')
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => {
            catDiv.innerHTML = `<h2> Here is a cat pic </h2>
            <img src="${cat.url}" alt="kitty" />`
            console.log(cats)
        });
    })
})

let dogButton = document.getElementById('give-dog')

dogButton.addEventListener("click", evt => {
    let dogDiv = document.getElementById('dog-pic')
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(res => res.json())
    .then(dogs => {
        dogs.forEach(dog => {
            dogDiv.innerHTML = `<h2> Here is a dog pic </h2>
            <img src="${dog.url}" alt="doggy" />`
            console.log(dogs)
        });
    })
})