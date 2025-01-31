import * as React from "react"
import "./index.less"
import { Statistic, Divider, Icon } from "antd"
import { TIMER_TIP } from "@/lib/constant/timer"
import ConnectStore from "../ConnectStore"
import { DEFAULT_TIME_TEXT_COLOR, DEFAULT_TIMER_BG_COLOR } from "@/lib/constant/color"
import Background from "../Background"
import { MAX_Z_INDEX } from "@/lib/commons/background"

type Props = {
  time: number // 毫秒数
  onFinish?: () => any
  title?: string
  color?: string
  bg?: string,
  bgColor?: string
}
let _isFinish = true // 时间基准要放到组件外部，防止因为页面渲染而被重置
let _NOW = Date.now()

export default function CTimer({ time, color, bg, bgColor, onFinish }: Props) {
  const { Countdown } = Statistic
  const format = "ss:SSS"
  let deadline
  if (_isFinish) {
    deadline = Date.now() + time
    _NOW = Date.now()
    _isFinish = false
  } else {
    deadline = (_NOW + time)
  }


  function handleFinish() {
    _isFinish = true
    _NOW = Date.now()
    onFinish && onFinish()


  }
  return (
    <div className={"timer " + (bg ? 'c-use-background' : '')}
      style={{
        backgroundColor: bgColor || DEFAULT_TIMER_BG_COLOR,
      }}>
      {bg && <Background img={bg} />}
      <Countdown
        format={format}
        suffix={
          <div className='timer-title' style={{
            color: color || DEFAULT_TIME_TEXT_COLOR
          }}> 秒</div>
        }
        prefix={
          <div>
            <Icon type='bell' />
          </div>
        }
        title={
          <div className='timer-title' style={{
            color: color || DEFAULT_TIME_TEXT_COLOR
          }}>{TIMER_TIP}</div>
        }
        value={deadline}
        valueStyle={{
          fontSize: '2.5rem',
          color: color || DEFAULT_TIME_TEXT_COLOR
        }}
        onFinish={handleFinish}
      />
    </div>

  )
}
