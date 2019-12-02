import { ISoldierInfo } from "./soldier";

export type IMapedState = {
    soldierType: string
}

export type IMapedDispatch = {
    setSoldierType: (string) => any
}