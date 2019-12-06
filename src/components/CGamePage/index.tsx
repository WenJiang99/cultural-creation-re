import * as React from "react"
import './index.less'
import CPage from "../CPage"
import Background from "../Background"
import CTimer from "../CTimer"



type Props = {
  type: 'x' | 'y',
  point: number
  pointImg: string
  time: number
  onFinish?: () => any
  bg?: string,
  children?: React.ReactNode

}


export default function CGamePage({ bg, children, type, point, pointImg, time, onFinish }: Props) {
  function handleFinish() {
    onFinish && onFinish()
  }

  return (
    <div className={"game-page " + (type === 'x' ? 'x-game-page' : 'y-game-page')}>
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
            time={time}
            onFinish={handleFinish}
          />
        </div>
      </div>
      <div className="game-area">
        {children}
      </div>

    </div>
  )
}