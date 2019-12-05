import { ISoldierInfo } from "./soldier";

export type IMapedState = {
    soldierType: string
    nodeIndex:number
}

export type IMapedDispatch = {
    setSoldierType: (string) => any
}