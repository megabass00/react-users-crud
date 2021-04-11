export const fetchUsersList = (page = 1) =>
  fetch(`${process.env.REACT_APP_API_BASEURL}/users?page=${page}`).then((res) =>
    res.json()
  )

export const fetchUser = (id) =>
  fetch(`${process.env.REACT_APP_API_BASEURL}/users/${id}`).then((res) =>
    res.json()
  )

export const updateUser = (id, { name, job }) =>
  fetch(`${process.env.REACT_APP_API_BASEURL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, job }),
  }).then((res) => res.json())

export const deleteUser = (id) =>
  fetch(`${process.env.REACT_APP_API_BASEURL}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
