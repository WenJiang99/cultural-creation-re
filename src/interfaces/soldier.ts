export type ISoldierInfo = {
    name: string,
    index?: number
}

export type ISoldierType = {
    [k: string]: ISoldierInfo
}