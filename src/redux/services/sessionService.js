export const loginService = ({ email, password }) =>
  fetch(`${process.env.REACT_APP_API_BASEURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json())

export const registerService = ({ email, password }) =>
  fetch(`${process.env.REACT_APP_API_BASEURL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json())
