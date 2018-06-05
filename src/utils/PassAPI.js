// Passwords
export const getPasses = () =>
  fetch("https://api.myjson.com/bins/1csql")
    .then(res => res.json())

    // The best resources on this:

    // https://daveceddia.com/where-fetch-data-redux/
    // https://hackernoon.com/redux-patterns-add-edit-remove-objects-in-an-array-6ee70cab2456
