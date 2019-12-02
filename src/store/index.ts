import { createStore, combineReducers } from "redux";
import { counterReducer, CounterStateType } from "./reducers/counter";
import { setSoldierType, ISoldierTypeState } from "./reducers/soldier"

export type ReduxStateType = {
} & CounterStateType & ISoldierTypeState

const rootReducers = combineReducers({
    setSoldierType
})

export const store = createStore(setSoldierType)

export function getStore() {
    return store
}

export function getSoldierType() {

}