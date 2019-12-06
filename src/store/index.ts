import { createStore, combineReducers } from "redux";
import { counterReducer, CounterStateType } from "./reducers/counter";
import { soldierReducer } from "./reducers/soldier"
import { nodeReducer } from "./reducers/node";
import { goodsReduces } from "./reducers/goods";
import { logReducer } from "./reducers/log";



const rootReducers = combineReducers({
    soldier: soldierReducer,
    node: nodeReducer,
    goods: goodsReduces,
    log:logReducer
})

export const store = createStore(rootReducers)

export function getStore() {
    return store
}

export function getSoldierType() {

}