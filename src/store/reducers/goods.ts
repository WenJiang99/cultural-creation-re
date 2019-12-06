import { DEFAULT_GOODS_COUNT } from "@/lib/constant/goods";
import { IGoodsActionType } from "@/interfaces/action";
import { ADD_THINGS, CONSUME_THINGS } from "../action/goods";
import { IGoodsStateType } from "@/interfaces/state";

const INIT_STATE = {
  count: DEFAULT_GOODS_COUNT
}

export function goodsReduces(state = INIT_STATE, action: IGoodsActionType): IGoodsStateType {
  switch (action.type) {
    case ADD_THINGS: {
      return Object.assign({}, state, { count: state.count + action.count })
    }
    case CONSUME_THINGS: {
      const _count = state.count - action.count
      return Object.assign({}, state, { count: (_count >= 0 ? _count : 0) })
    }
    default: {
      return state
    }
  }
}
