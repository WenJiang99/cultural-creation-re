export type IActionType = {
  type: string,
  text?: string
}

export type INodeActionType = {
  nodeIndex: number
} & IActionType

export type INodeStateType = {
  nodeIndex: number
}