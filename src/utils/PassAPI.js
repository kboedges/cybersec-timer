//  https://api.myjson.com/bins/1csqle
const api = "https://api.myjson.com/bins/1csqle"

// Passwords
export const getPasses = () =>
  fetch(`${api}`)
    .then(res => res.json())
    // .then(data => data.posts) 
