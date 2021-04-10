export const fetchUsersList = (page = 1) => {
  return fetch(`${process.env.API_BASEURL}/users?page=${page}`)
}

export const fetchUser = (id) => {
  return fetch(`${process.env.API_BASEURL}/users/${id}`)
}

export const updateUser = (id, user) => {
  return fetch(`${process.env.API_BASEURL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: user,
  })
}

export const deleteUser = (id) => {
  return fetch(`${process.env.API_BASEURL}/users/${id}`, {
    method: 'DELETE',
  })
}
