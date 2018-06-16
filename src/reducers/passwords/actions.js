export const SET_PASSWORDS = "SET_PASSWORDS";

export function getPasswords() {
  return dispatch =>
    fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(res => res.results)
      .then(passwords => passwords.map(password => password.name))
      .then(passwords => dispatch(setPasswords(passwords)));
}

export function setPasswords(passwords) {
  return {
    type: SET_PASSWORDS,
    passwords
  };
}