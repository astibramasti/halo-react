var initialState = {
  bio: '',
  age: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BIO':
      state = {
        ...state,
        bio: action.payload
      }
      break
    case 'UPDATE_AGE':
      state = {
        ...state,
        age: state.age + action.payload
      }
      break
     default: 
  }

  return state
}

export default reducer