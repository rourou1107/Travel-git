let defaultCity = '上海'
let lastID = ''
try {
  if (localStorage.city) { // localStorage最好用try catch捕获,
    // 因为在某些浏览器中，如果用户关闭了本地存储或者使用隐身模式,
    // 使用localStorage,浏览器会抛出异常
    defaultCity = localStorage.city
  }
  if (localStorage.id) {
    lastID = localStorage.id
  }
} catch (e) {}
export default {
  city: defaultCity,
  id: lastID
}
