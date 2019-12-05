export type INodeType = {
  x: number
  y: number,
  name?: string
  roadPoints?: IPointType[]
  roadFlagPoint?: IRoadFlagType[]  // 两个地图节点之间的路径曲线的直线折点
  nodeFlagSize?: number
}

export type IPointType = {
  x: number
  y: number
}

export type IRoadFlagType = {
  startPoint: IPointType
  endPoint: IPointType
}

