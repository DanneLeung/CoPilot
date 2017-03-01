import { GET, POST } from 'utils/fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const USER_LIST = 'USER_LIST'
export const USER_CREATE = 'USER_CREATE'

// ------------------------------------
// Apis
// ------------------------------------
export function list() {
  return GET(USER_LIST).then(users => users)
}
export function add() {
  return POST(USER_CREATE).then(user => user)
}
