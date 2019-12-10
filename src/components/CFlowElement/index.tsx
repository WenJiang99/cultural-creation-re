import * as React from 'react'
import './index.less'
import Background from '../Background'
import { IRoadFlagType, IPointType } from '@/interfaces/map'
import { createLinePoints } from '@/lib/commons/map'
import { getRandom } from '@/lib/commons/game'
import { SECOND } from '@/lib/constant/timer'
import { message } from 'antd'
import { INIT_BUTLLET_TIME, BULLET_MAX_X } from '@/lib/constant/game'
import { INIT_X } from '@/lib/constant/map'

type Props = {
  range: IRoadFlagType
  type: 'x' | 'y',
  img: string
  speed: number
  flag: boolean
  onMove?: (point: IPointType) => void
}

const INIT_POINT_INDEX = 0
const INIT_Y = -10




export default function CFlowElement({ range, img, speed, flag, onMove }: Props) {

  let _intervalTimer = null
  let _timeoutTimer = null
  const _timers = []
  function handleMove(point: IPointType) {
    onMove && onMove(point)
  }

  const roadPointList = createLinePoints(range.startPoint, range.endPoint, Math.round(speed))
  const [pointIndex, setIndex] = React.useState(INIT_POINT_INDEX)


  React.useLayoutEffect(() => {

    if (pointIndex < roadPointList.length - 1) {
      _timers.push(setTimeout(() => {
        setIndex(pointIndex => pointIndex + 1)
      }, Math.round((INIT_BUTLLET_TIME))))
    } else {
      _timers.push(setTimeout(() => {
        setIndex(INIT_POINT_INDEX)
      }, getRandom(1000, 5000)))
    }
    if (_timers.length >= 2) {
      clearTimeout(_timers.shift())
    }
    handleMove(roadPointList[pointIndex])
  }, [pointIndex])
  return (
    <div className="flow-element" style={{
      position: 'absolute',
      left: ((roadPointList[pointIndex] && roadPointList[pointIndex].x) || roadPointList[0].x) + 'px',
      top: ((roadPointList[pointIndex] && roadPointList[pointIndex].y) || INIT_Y) + 'px'
    }}>
      <div className="element-area c-use-background">
        <Background img={img} />
      </div>
    </div>
  )

}