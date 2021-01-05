// get session from local storage
const test =
  typeof window !== 'undefined'
    ? window.localStorage.getItem('persist:root')
    : null
const state = test ? JSON.parse(test) : null

export function getFirstName() {
  const auth = state?.auth ? JSON.parse(state.auth) : null
  const firstName = auth?.user?.first_name
  return firstName
}
export function getIsVerified() {
  const personal = state?.personal ? JSON.parse(state.personal) : null
  const isVerified = personal?.isVerified || false
  return isVerified
}
