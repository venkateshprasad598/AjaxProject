let inputText = document.getElementById('text')
let button = document.getElementById('btn')

button.addEventListener('click', myButton)


function myButton() {
    let mainDiv = document.getElementById('div')
    mainDiv.innerHTML = ''

    let userData = inputText.value

    let xhr = new XMLHttpRequest()
    let url = "https://api.unsplash.com/search/photos?query= " + userData + " &client_id=90jOARIAZavZ4vUsB6IwQZfhEBRifQSXa9Gsu1kdEPs&per_page=100"

    xhr.open('GET', url, true)

    xhr.onload = function () {
        let myJson = JSON.parse(this.responseText)
        console.log(myJson)

        var newDiv = document.getElementById('div')

        myJson.results.forEach(element => {
            let image = document.createElement('img')
            image.src = `${element.urls.regular}`
            newDiv.append(image)
        });
    }
    
    xhr.send()
}


