
const initial_state = {
  count: 1
}

const RootReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'increament': {
      return {
        ...state,
        count: initial_state
      }
    }
    default: {
      return state;
    }
  }
}

export default RootReducer;