import { IBaseActionType } from "@/interfaces/action";
import { RED_CENTER, RED_2, RED_4, RED_25 } from "@/lib/constant/soldier";
import { ISoldierStateType } from "@/interfaces/state";


const INIT_STATE = {
  soldierType: null
}

export function soldierReducer(state = INIT_STATE, action: IBaseActionType):ISoldierStateType {
  switch (action.type) {
    case RED_CENTER: {
      return Object.assign({}, state, { soldierType: RED_CENTER })
    }
    case RED_2: {
      return Object.assign({}, state, { soldierType: RED_2 })
    }
    case RED_4: {
      return Object.assign({}, state, { soldierType: RED_4 })
    }
    case RED_25: {
      return Object.assign({}, state, { soldierType: RED_25 })
    }
    default: {
      return state
    }

  }
}