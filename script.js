//get a random quote 
fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => console.log(quote))

// // if input is in list, pull a quote from the anime name
// // NOTE: Default number of response is currently 10 for the API link (Naruto)
fetch('https://animechan.vercel.app/api/quotes/anime?title=naruto')
      .then(response => response.json())
      .then(quotes => console.log(quotes))





