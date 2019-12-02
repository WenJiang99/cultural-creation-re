import * as React from "react"
import "./index.less"

type Props = {
  text?: string
  children?: React.ReactNode
  width?: number | string
  height?: number | string
  type?: 'x' | 'y' | 'all'
}

const DEFAULT_WIDTH = '100%'
const DEFAULT_HEIGHT = '100%'

export default function ScrollableArea({ text, children, height, width, type }: Props) {
  width = width + ""
  height = height + ""
  const _width: string = width ? (width.includes('%') ? width : (width + 'px')) : DEFAULT_WIDTH
  const _height: string = height ? (height.includes('%') ? height : (height + 'px')) : DEFAULT_HEIGHT
  return (
    <div className="scrollable-wrapper" style={{
      width: _width,
      height: _height
    }}>
      <div className={"scrollable-area " + (type === 'all' ? 'all-scrollable' : (type === 'x' ? 'x-scrollable' : 'y-scrollable'))}>
        <div className="scrollable-text">
          {text}
        </div>
        {children}
      </div>
    </div>
  )
}