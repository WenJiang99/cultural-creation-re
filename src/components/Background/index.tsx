import * as React from 'react'
import './index.less'
import { DEFAULT_OPACITY, MIN_Z_INDEX } from '@/lib/commons/background'

interface Props {
  img: string,
  opacity?: number
  layer?: number
}
export default function Background({ img, opacity, layer }: Props) {
  return (
    <div className="page-background c-i-am-background" style={{ opacity: opacity || DEFAULT_OPACITY, zIndex: layer || MIN_Z_INDEX }}>
      <img src={img} alt="" />
    </div>

  )
}