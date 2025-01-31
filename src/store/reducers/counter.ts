import { ActionType, INCREASEMENT, DECREASEMENT, RESET } from "../action/counter";

export type CounterStateType = {
  count: number
}

 const INIT_STATE: CounterStateType = {
  count: 10
}
export function counterReducer(state = INIT_STATE, action: ActionType) {
  switch (action.type) {
    case INCREASEMENT: {
      
      return Object.assign({}, state, { count: state.count + 1 })
    }
    case DECREASEMENT: {
      return Object.assign({}, state, { count: state.count - 1 })
    }
    case RESET: {
      return INIT_STATE
    }
    default: return state

  }
}