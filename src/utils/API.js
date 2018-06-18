const api = "https://us-central1-cyber-security-game.cloudfunctions.net/validate";

// Generate a unique token for storing data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const validate = value =>
  fetch(`${api}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password: value
    })
  }).then(res => res.json());
