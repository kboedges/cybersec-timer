// Passwords
export const getPasses = () =>
  fetch("https://api.myjson.com/bins/1csql")
    .then(res => res.json())
