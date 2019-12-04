import { IPointType, INodeType } from "@/interfaces/map"
import { OFFSET_X, OFFSET_Y } from "../constant/map"

const INIT_STEP: number = 2
const INIT_COUNT: number = 30
const THRESHOLD = 5  // 误差范围


export function createLinePoints(p1: IPointType, p2: IPointType, step = INIT_STEP): IPointType[] {
  const dx = p2.x - p1.x
  const dy = p2.y - p1.y

  const target: IPointType[] = []
  let i = 1;
  let currentPoint: IPointType


  if (dx === 0) { // 斜率不存在
    const sign = Math.sign(dy)// 步长乘上正负号
    step = step * sign
    const _yList = createVector(p1.y, p2.y, step)
    _yList.forEach(item => {
      target.push({
        x: p1.x,
        y: item
      })
    })
  } else {
    const sign = Math.sign(dx)// 步长乘上正负号
    step = step * sign
    const k = dy / dx  // 斜率
    const b = p1.y - k * p1.x // 截距
    const _xList = createVector(p1.x, p2.x, step)
    _xList.forEach(item => {
      target.push({
        x: item,
        y: item * k + b
      })
    })
  }
  return target
}

export function isInThresholdRange(p1: IPointType, p2: IPointType) {
  return Math.sqrt(toPow_2(p1.x - p2.x) + toPow_2(p1.y - p2.y)) <= THRESHOLD
}

export const toPow_2 = (x: number) => Math.pow(x, 2)


export function createVector(start: number, end: number, step: number) {
  const count = Math.round(Math.abs((end - start) / step))
  return Array(count).fill(0).map((_item, index) => start + index * step)
}

export const useX = (x: number): number => x - OFFSET_X
export const useY = (y: number): number => y - OFFSET_Y