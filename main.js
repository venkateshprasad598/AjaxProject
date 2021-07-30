let inputText = document.getElementById('text')
let button = document.getElementById('btn')

button.addEventListener('click', myButton)

function myButton(){
    let userData = inputText.value

    let xhr = new XMLHttpRequest()

    let url = "https://api.unsplash.com/search/photos?query= " + userData+ " &client_id=90jOARIAZavZ4vUsB6IwQZfhEBRifQSXa9Gsu1kdEPs&per_page=50"

    xhr.open('GET', url, true)

    xhr.onload = function(){
        let myJson = JSON.parse(this.responseText)
        console.log(myJson)


        var newDiv = document.getElementById('div')
        myJson.results.forEach(element => {
            let image = document.createElement('img')
            image.src = `${element.urls.regular}`
            // newDiv.append(`<img src= element.urls.regular />`)
            newDiv.append(image)
        });

        // const image = document.createElement('img')
        // console.log(image)
        // image.src = "myJson.results[0].urls.regular"

        // newDiv.append(image)

        // image.src = "myJson[0].urls.regular"
        // console.log(image)

        // let image = document.createElement("img")
        // console.log(image);
        // image.src = "myJson[0].urls.regular"


        // // newDiv.append(`<img src = "${myJson.urls.regular}" />`)

        // myJson.forEach(element => {
        //     newDiv.append(`<img src = "${element.urls.regular}" />`)
        // });

        }


        xhr.send()


    }


