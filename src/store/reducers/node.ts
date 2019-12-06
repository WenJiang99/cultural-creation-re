import { INIT_NODE_INDEX } from "@/lib/constant/map";
import {  IBaseActionType, INodeActionType } from "@/interfaces/action";
import { SET_NODE } from "../action/node";
import { INodeStateType } from "@/interfaces/state";

const INIT_STATE = {
  nodeIndex: INIT_NODE_INDEX
}

export function nodeReducer(state = INIT_STATE, action: INodeActionType):INodeStateType {
  switch (action.type) {
    case SET_NODE: {
      return Object.assign({}, state, { nodeIndex: action.nodeIndex })
    }
    default: {
      return state
    }
  }
}