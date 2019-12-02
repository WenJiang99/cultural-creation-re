import { PointType } from "./map"

export interface ITipInfo {
    point: PointType,
    text: string
}
const FIELD_COLOR = '#F08080'
const TEXT_FIELD_COLOR = 'yellow'
const TEXT_COLOR = 'black'

export const createCanvas = (ctx: any, points: number[], tipObj?: ITipInfo) => {
    const pointList: PointType[] = []
    for (let i = 0; i < points.length; i += 2) {
        pointList.push({ x: Math.round(points[i]), y: Math.round(points[i + 1]) })
    }
    ctx.beginPath()
    ctx.globalAlpha = 0.6
    for (let point of pointList) {
        ctx.lineTo(point.x, point.y)
    }
    ctx.fillStyle = FIELD_COLOR
    ctx.fill()
    ctx.lineWidth = 4
    ctx.stroke()
    ctx.closePath()

    // ctx.fillRect()
    if (tipObj && tipObj.point) {
        const w = 100
        const h = w * 0.5
        const { x, y } = tipObj.point
        ctx.fillStyle = TEXT_FIELD_COLOR
        ctx.lineWidth = 3
        ctx.globalAlpha = 0.8
        ctx.fillRect(+x - w / 2, +y - h / 2, w, h)
        ctx.strokeRect(+x - w / 2, +y - h / 2, w, h)
        ctx.globalAlpha = 1
        ctx.font = "20px serif"
        ctx.textAlign = 'center'
        ctx.fillStyle = TEXT_COLOR
        ctx.fillText(tipObj.text, +x, +y + h / 6, w)
    }
}
export const clearCanvas = (ctx: any, startPoint: PointType, endPoint: PointType) => {
    ctx.clearRect(startPoint.x, startPoint.y, endPoint.x, endPoint.y)
}