import { ILogStateType } from "@/interfaces/state";
import { ILogActionType } from "@/interfaces/action";
import { SHOW_LOG_COUNT } from "../action/log";

const INIT_STATE: ILogStateType = {
  count: 0
}

export function logReducer(state = INIT_STATE, action: ILogActionType): ILogStateType {
  switch (action.type) {
    case SHOW_LOG_COUNT: {
      return Object.assign({}, state, { count: action.count })
    }
    default: {
      return state
    }
  }
}