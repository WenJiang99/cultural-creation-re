import { INIT_NODE_INDEX } from "@/lib/constant/map";
import { INodeStateType, IActionType, INodeActionType } from "@/interfaces/action";
import { SET_NODE } from "../action/node";
import { INIT_STATE } from "..";




export function nodeReducer(state = INIT_STATE, action: INodeActionType) {
  switch (action.type) {
    case SET_NODE: {
      return Object.assign({}, state, { nodeIndex: action.nodeIndex })
    }
    default: {
      return state
    }
  }
}