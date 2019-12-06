export type IGameDataType = {
  name: string
  intruduction:IGameIntruductionType
  cost?:number // 损耗的物资数量
  time:number // 游戏时间
  path:string // 游戏router path
  router:string // 带参页面的路径router
}

export type IGameType = {
  [k: string]: IGameDataType
}

export type IGameIntruductionType = {
  time?:string // 背景时间
  place?:string // 背景地点
  role?:string // 背景人物
  detail:string // 游戏玩法介绍
}