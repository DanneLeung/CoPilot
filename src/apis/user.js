import { POST } from 'utils/fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const USER_LIST = 'USER_LIST'

// ------------------------------------
// Apis
// ------------------------------------
export function list() {
  return POST(USER_LIST).then(users => users)
}
