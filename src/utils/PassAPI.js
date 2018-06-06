// Passwords
export const getPasses = () =>
  fetch("https://api.myjson.com/bins/wa8l6")
    .then(res => res.json())

    // The best resources on this:

    // https://daveceddia.com/where-fetch-data-redux/
    // https://hackernoon.com/redux-patterns-add-edit-remove-objects-in-an-array-6ee70cab2456


//  {
// "passwords": ["pass1", "pass2", "pass3", "pass4", "pass5", "pass6"]
// }