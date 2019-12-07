import * as React from "react"
import "./index.less"
import ConnectStore from "../ConnectStore"
import Background from "../Background"
import { getRandom } from "@/lib/commons/game"

export const X = 'x'
export const Y = 'y'
export const X_REVERSE = 'x-reverse'
export const Y_REVERSE = 'y-reverse'

export type D_X = 'x'
export type D_Y = 'y'
export type D_X_REVERSE = 'x-reverse'
export type D_Y_REVERSE = 'y-reverse'

export type IDirectionType = D_X | D_Y | D_X_REVERSE | D_Y_REVERSE



type Props = {
  bg?: string
  bgColor?: string
  width: number
  height: number
  direction: IDirectionType,
  speed?: number
  onClick?: () => any
  _k?: any

}

const INIT_TIME = 10

function getMoveDirection(direction: IDirectionType) {
  switch (direction) {
    case X: {
      return 'move-x'
    }
    case Y: {
      return 'move-y'
    }
    case X_REVERSE: {
      return 'move-x-reverse'
    }
    case Y_REVERSE: {
      return 'move-y-reverse'
    }
  }
}

export default function CElement({ bg, bgColor, width, height, direction, speed, onClick, _k }: Props) {

  const _width = width || 100
  const _height = height || 100
  const _bgColor = bgColor || '#000'
  const _speed = speed || 1
  const _direction = direction || 'x'

  const [isShow, setShow] = React.useState(true)
  function handleClick() {
    onClick && onClick()
  }

  React.useLayoutEffect(() => {
    setTimeout(() => setShow(true), getRandom(1000, 8000))
  }, [isShow])
  function getX() {
    return getRandom(10, 10)
  }

  function getY() {
    return getRandom(10, 650)
  }


  return (
    <div
      className={(isShow ? '' : 'clicked-gone')}
      key={_k}
      style={{
        position: 'absolute',
        width: _width + "px",
        height: _height + "px",
        top: `${getY()}px`,
        left: `${getX()}px`
      }}
      onClick={() => {
        setShow(false)
        handleClick()
      }}
    >
      <div className="element-root ">
        {bg
          ?
          <div className={"element-container c-use-background c-clickable-item  " + (getMoveDirection(_direction))} style={{
            animationDuration: (INIT_TIME / _speed) + "s"
          }}>
            <Background img={bg} />
          </div>
          :
          <div className="element-container" style={{
            backgroundColor: _bgColor
          }}>
          </div>
        }
      </div>

    </div>
  )

}

