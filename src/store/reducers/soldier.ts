import { IActionType } from "@/interfaces/action";
import { RED_CENTER, RED_2, RED_4, RED_25 } from "@/lib/constant/soldier";

export type ISoldierTypeState = {
  soldier: string
}

const INIT_STATE = {
  soldierType:RED_CENTER
}

export function soldierReducer(state = INIT_STATE, action: IActionType) {
  switch (action.type) {
    case RED_CENTER: {
      alert(action.type)
      return Object.assign({}, state, { soldierType: RED_CENTER })
    }
    case RED_2: {
      alert(action.type)
      return Object.assign({}, state, { soldier: RED_2 })
    }
    case RED_4: {
      return Object.assign({}, state, { soldier: RED_4 })
    }
    case RED_25: {
      return Object.assign({}, state, { soldier: RED_25 })
    }
    default: {
      return state
    }

  }
}