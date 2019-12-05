import { INIT_NODE_INDEX } from "@/lib/constant/map";
import { INodeStateType, IActionType, INodeActionType } from "@/interfaces/action";
import { SET_NODE } from "../action/node";

const INIT_STATE = {
  nodeIndex: INIT_NODE_INDEX
}

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