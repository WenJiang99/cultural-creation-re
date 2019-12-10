import * as React from "react"
import './index.less'
import CPage from "../CPage"
import Background from "../Background"
import CTimer from "../CTimer"
import TipTimer from "../TipTimer"



type Props = {
  type: 'x' | 'y',
  point: number
  pointImg: string
  gameTime: number,
  timerTime?: number
  onFinish?: () => any
  bg?: string,
  children?: React.ReactNode
  onTipTimerFinish?: () => void

}


export default function CGamePage({ bg, children, type, point, pointImg, gameTime, timerTime, onFinish, onTipTimerFinish }: Props) {
  function handleFinish() {
    onFinish && onFinish()
  }

  const [timing, setTiming] = React.useState(true)
  return (
    <div className={"game-page " + (type === 'x' ? 'x-game-page' : 'y-game-page')}>
      {
        timing
          ?
          <TipTimer time={timerTime || 3} onFinish={() => {
            onTipTimerFinish && onTipTimerFinish()
            setTiming(false)
          }} />
          :
          <div className={"game-info " + (type === 'x' ? 'x-game-info' : 'y-game-info')}>
            <div className="game-point-area">
              <div className="game-point-img c-use-background">
                <Background img={pointImg} />
              </div>
              <div className="game-point-value">
                {`X ${point}`}
              </div>
            </div>
            <div className="game-timer-area">
              <CTimer
                time={gameTime}
                onFinish={handleFinish}
              />
            </div>
          </div>
      }
      <div className="game-area">
        {children}
      </div>
    </div>
  )
}