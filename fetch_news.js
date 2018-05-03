const key = "95888a6949cb45cbb23444f885be24b1"

/* Example url: https://newsapi.org/v2/top-headlines?q=bitcoin */
let url = `https://newsapi.org/v2/everything?q=hiking+sweden&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    //articles is an object in the JSON.

    newsdata.articles.forEach((article, index) => {
      //Here we create HTML elements that we add to our HTML file

      if(index <1){


      const div = document.createElement("div")
      div.className = "main"




      			//This fetches and add images to our articles
      			const img = document.createElement("img")
                  img.src = article.urlToImage
                  div.appendChild(img)

                  const heading = document.createElement("h2")
                          heading.innerHTML = article.title
                          div.appendChild(heading)

      			const description = document.createElement("p")
      				description.innerHTML = article.description
      				div.appendChild(description)

      			const link = document.createElement("a")
      					link.href = article.url
      					link.innerHTML = "Read more"
      					div.appendChild(link)

        articlesDiv.appendChild(div)
      }

    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.

fetch(url)
  .then(response => response.json())
  .then(recievedNews)
