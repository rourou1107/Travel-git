export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changeID (state, id) {
    state.id = id
    try {
      localStorage.id = id
    } catch (e) {}
  }
}
