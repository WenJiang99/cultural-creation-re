import * as React from 'react'
import './index.less'
import CPage from '@/components/CPage'
import bg from "../../assets/images/game/bullet/bg.jpg"
import bulletPic from "../../assets/images/game/bullet/bullet.png"
import CGamePage from '@/components/CGamePage'
import { SECOND } from '@/lib/constant/timer'
import CFlowElement from '@/components/CFlowElement'
import ConnectStore from '@/components/ConnectStore'
import { getRandom } from '@/lib/commons/game'
import { INIT_BUTLLET_TIME, BULLET_MIN_X, BULLET_MAX_X, BULLET_MAX_Y, BULLET_ROLE_SIZE, BULLET_HIT_RANGE, FISH_GAME } from '@/lib/constant/game'
import rolePic from "../../assets/images/game/bullet/role.png"
import CKeyMoveElement from '@/components/CKeyMoveElement'
import { message } from 'antd'
import { MAX_Z_INDEX } from '@/lib/commons/background'
import Background from '@/components/Background'
import { IPointType } from '@/interfaces/map'
import { getDistance, isHited } from '@/lib/commons/ulti'
import CGameResult from '@/components/CGameResult'
import { useHistory } from 'react-router'
import { GAME_MAP_PAGE } from '@/lib/constant/router_path'

function getX() {
  return getRandom(BULLET_MIN_X, BULLET_MAX_X)
}
function getSpeed() {
  return getRandom(4, 18)
}

const BULLET_COUNT = 40
const countArr = Array(BULLET_COUNT).fill(0)

const pointMap: {
  [x: string]: number
} = {}

let rolePoint: IPointType = {
  x: (BULLET_MAX_X - BULLET_MIN_X) / 2 + BULLET_ROLE_SIZE / 2,
  y: (BULLET_MAX_Y)
}
const INIT_POS = 0
function BulletGame() {
  const history = useHistory()
  const [isEnd, setEnd] = React.useState(false)
  const [isHit, setHit] = React.useState(false)
  const [isStart, setStart] = React.useState(false)

  return (
    <CPage bg={bg} >
      {
        (isEnd || isHit)
          ?
          <CGameResult name={FISH_GAME}
            message={isHit ? '士兵被子弹击中，游戏结束' : '游戏结束，恭喜您获得如下奖励'}
            // award={{
            //   '物资': 10,
            //   '长官信任值': 20
            // }}
            onReplay={() => {
              setEnd(false)
              setHit(false)
              setStart(false)
            }}
            onExit={() => {
              history.push(GAME_MAP_PAGE)

            }}

          />
          :
          <CGamePage
            gameTime={15 * SECOND}
            timerTime={5}
            point={1}
            pointImg={bulletPic}
            type='x'
            onFinish={() => {
              setEnd(true)

              setStart(false)
            }}
            onTipTimerFinish={() => setStart(true)}

          >
            {
              countArr.map((_item, index) => {
                if (index >= 1) {
                  // return
                }
                const x = getX()
                pointMap[x] = INIT_POS
                return <CFlowElement
                  key={x + index}
                  type='y'
                  img={bulletPic}
                  speed={getSpeed()}
                  flag={true}
                  range={{
                    startPoint: {
                      x: x,
                      y: -100
                    },
                    endPoint: {
                      x: x,
                      y: 800
                    }
                  }}
                  onMove={(point) => {
                    if (!isStart) {
                      return
                    }
                    if (isHited(point, rolePoint)) {
                      console.log(point, rolePoint)
                      // message.info('hit')
                      setHit(true)
                    }
                  }}
                />
              })
            }
            <CKeyMoveElement img={rolePic} onMove={(x_role) => {
              rolePoint.x = x_role + BULLET_ROLE_SIZE / 2
              message.info(rolePoint.x + " ," + rolePoint.y)
            }} />
          </CGamePage>
      }
    </CPage>
  )
}

export default ConnectStore(BulletGame)