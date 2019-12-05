import { ISoldierInfo } from "./soldier";

export type IMapedState = {
    soldier: {
        soldierType: string
    }
    node: {
        nodeIndex: number
    }
}

export type IMapedDispatch = {
    setSoldierType: (string) => any
}