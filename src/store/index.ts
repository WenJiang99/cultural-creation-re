import { createStore, combineReducers } from "redux";
import { counterReducer, CounterStateType } from "./reducers/counter";
import { soldierReducer, ISoldierTypeState } from "./reducers/soldier"
import { nodeReducer } from "./reducers/node";
import { INodeStateType } from "@/interfaces/action";
import { RED_CENTER } from "@/lib/constant/soldier";
import { INIT_NODE_INDEX } from "@/lib/constant/map";
import { setNode } from "./action/node";

export const INIT_STATE = {
    soldierType: RED_CENTER,
    nodeIndex: INIT_NODE_INDEX
}


export type ReduxStateType = {
} & ISoldierTypeState & INodeStateType



const rootReducers = combineReducers({
    soldierType: soldierReducer,
    nodeIndex: nodeReducer
})

export const store = createStore(rootReducers)

export function getStore() {
    return store
}

export function getSoldierType() {

}