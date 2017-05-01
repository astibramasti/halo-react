const mathReducer = (state = { value: 0}, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        value: state.value + action.payload
      }
      break
    case 'SUBSTRACT':
      state = {
        ...state,
        value: state.value - action.payload
      }
      break
      default:
  }

  return state
}

export default mathReducer