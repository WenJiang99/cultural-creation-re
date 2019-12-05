import { INodeActionType } from "@/interfaces/action"

export const SET_NODE = 'setNode'

export function setNode(index: number): INodeActionType {
  return {
    type: SET_NODE,
    nodeIndex: index

  }
}