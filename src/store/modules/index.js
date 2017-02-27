// import userlist from './userlist'
// const m = {
//   userlist
// }
// console.log(m)
// export default m
const modulesContext = require.context('../../routes/', true, /modules\/.*\.js$/)

export default modulesContext.keys().reduce((modules, key) => {
  const _key = key.replace(/[^\/]*[\/]+/g, '').replace(/(^\.\/)|(\.js$)/g, '')
  modules[_key] = modulesContext(key).default
  console.log(key, _key)
  console.log(modules)
  return modules
}, {})
