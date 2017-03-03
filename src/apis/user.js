import { GET, POST, PUT, DELETE } from 'utils/fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const URL_USER = 'http://localhost:4040/api/users'

// ------------------------------------
// Apis
// ------------------------------------
export function load(id) {
  return GET(`${URL_USER}/${id}`).then(user => user)
}
export function list() {
  return GET(URL_USER).then(users => users)
}
export function create(user) {
  return POST(URL_USER, user).then(user => user)
}

export function update(id, user) {
  return PUT(`${URL_USER}/${id}`, user).then(user => user)
}

export function remove(id) {
  return DELETE(`${URL_USER}/${id}`).then(user => user)
}
