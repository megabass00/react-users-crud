export const login = ({ username, password }) => {
  return fetch(`${process.env.API_BASEURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: { username, password },
  }).then((res) => res.token)
}
