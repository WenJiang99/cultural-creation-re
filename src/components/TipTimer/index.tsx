import * as React from 'react'
import './index.less'

type Props = {
  time: number
  message?: string
  onFinish?: () => void
}

export default function TipTimer({ time, message, onFinish }: Props) {
  function handleFinish() {
    onFinish && onFinish()
  }

  let _timers = [];
  time = Math.round(time)

  const [currentTime, setTime] = React.useState(time)

  React.useEffect(() => {
    if (_timers.length >= 2) {
      clearTimeout(_timers.shift())
    }
    if (currentTime > 0) {
      _timers.push(setTimeout(() => {
        setTime(currentTime - 1)
      }, 1000))
    } else {
      handleFinish()
    }
  })
  return (
    <div className="tip-timer">
      <div className="tip-area">
        <div className="tip-area-text">
          {message || '游戏即将开始'}
        </div>
        <div className="tip-area-vlaue">
          {currentTime}
        </div>
      </div>
    </div>
  )

}