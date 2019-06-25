module.exports = function (state = [], action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [{
        id: action.id,
        name: action.name
      }, ...state]
    case 'DELETE_FILM':
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }

}