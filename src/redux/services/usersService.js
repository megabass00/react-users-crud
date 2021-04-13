export const fetchUsersListService = (page = 1) =>
  fetch(`${process.env.REACT_APP_API_BASEURL}/users?page=${page}`).then((res) =>
    res.json()
  )

export const fetchUserService = (id) =>
  fetch(`${process.env.REACT_APP_API_BASEURL}/users/${id}`).then((res) =>
    res.json()
  )

export const updateUserService = (id, { name, job }) =>
  fetch(`${process.env.REACT_APP_API_BASEURL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, job }),
  }).then((res) => res.json())

export const deleteUserService = (id) =>
  fetch(`${process.env.REACT_APP_API_BASEURL}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
