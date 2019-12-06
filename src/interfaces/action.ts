export type IBaseActionType = {
  type: string,
  text?: string
}

export type INodeActionType = {
  nodeIndex: number
} & IBaseActionType



export type IGoodsActionType = {
  count: number
} & IBaseActionType


export type ILogActionType = {
  count: number
} & IBaseActionType