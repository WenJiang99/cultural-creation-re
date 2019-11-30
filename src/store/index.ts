import { createStore } from "redux";
import { counterReducer } from "./reducers/counter";


export const store = createStore(counterReducer)

export function getStore() {
    return store
}