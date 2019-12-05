import { ISoldierInfo } from "./soldier";

export type IMapedState = {
    soldier: string
    node:number
}

export type IMapedDispatch = {
    setSoldierType: (string) => any
}