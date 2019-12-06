import * as React from "react"

import "./index.less"
import CPage from "@/components/CPage"
import CElement from "@/components/CElement"
import bg from "../../assets/images/game/fish/bg.jpg"
import fishLeftPic from "../../assets/images/game/fish/fish-left.png"
import fishRightPic from "../../assets/images/game/fish/fish-right.png"
import fish_1_leftPic from "../../assets/images/game/fish/fish-1-left.png"
import fish_1_rightPic from "../../assets/images/game/fish/fish-1-right.png"
import ConnectStore from "@/components/ConnectStore"
import { getRandom } from "@/lib/commons/game"
import Background from "@/components/Background"
import CGamePage from "@/components/CGamePage"
import { SECOND } from "@/lib/constant/timer"
import { GAME_DATA } from "@/lib/data/game"
import { FISH_GAME } from "@/lib/constant/game"



function getSpeed() {
  return getRandom(1.5, 5)
}

const FISH_COUNT = 30
const COUNT_ARR = new Array(FISH_COUNT).fill(0)
const countArr = COUNT_ARR.map((_item, index) => index)

function FishPage() {

  const [point, setPoint] = React.useState(0)
  React.useLayoutEffect(() => {
  })

  return (
    <CPage bg={bg}>
      {/* <div className="point-area" >
        <div className="point-img c-use-background">
          <Background img={fishLeftPic} />
        </div>
        <div className="point-value">
          X {point}
        </div>
      </div>
      <div className="game-area">
        {
          countArr.map((item, index) => {
            if (index % 2 === 0) {
              return <CElement width={150} height={100} direction={'x'} bg={fishRightPic} speed={getSpeed()} key={index + index + ""}
                onClick={() => {
                  setPoint(point + 1)
                }} />
            } else {
              return <CElement width={170} height={150} direction='x-reverse' bg={fishLeftPic} speed={getSpeed()} key={index + index + ""}
                onClick={() => {
                  setPoint(point + 1)
                }} />
            }
          })
        }
      </div> */}
      <CGamePage
        type='x'
        point={point}
        pointImg={fishLeftPic}
        time={GAME_DATA[FISH_GAME].time}
        onFinish={()=>{
          
        }}
      >
        {
          countArr.map((item, index) => {
            if (index % 2 === 0) {
              return <CElement width={150} height={100} direction={'x'} bg={fishRightPic} speed={getSpeed()} key={index + index + ""}
                onClick={() => {
                  setPoint(point + 1)
                }} />
            } else {
              return <CElement width={170} height={150} direction='x-reverse' bg={fishLeftPic} speed={getSpeed()} key={index + index + ""}
                onClick={() => {
                  setPoint(point + 1)
                }} />
            }
          })
        }

      </CGamePage>
    </CPage>
  )
}

export default ConnectStore(FishPage)