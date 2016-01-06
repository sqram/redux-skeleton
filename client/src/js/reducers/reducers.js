import { LIST_ITEMS } from '../actions/actions'

const initialState = {
  items: ['tofu', 'broccoli', 'gnocchi']
}

function MyApp (state = initialState, action) {
  switch (action.type) {
    case 'LIST_ITEMS':
      let newState = []
      return newState

    default:
      return state
  }
}


export default MyApp