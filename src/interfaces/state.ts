export type INodeStateType = {
    // node: number
    nodeIndex: number
}

export type ISoldierStateType = {
    // soldier: string
    soldierType: string
}

export type IGoodsStateType = {
    // goods:
    count: number
}

export type ReduxStateType = {
    node: INodeStateType,
    soldier: ISoldierStateType,
    goods: IGoodsStateType
} 