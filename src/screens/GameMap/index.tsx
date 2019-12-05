import * as React from "react"
import "./index.less"
import { IPageBaseProps } from "@/interfaces/page"
import CPage from "@/components/CPage"
import mapBg from "../../assets/images/map/mapBg.png"
import ConnectStore from "@/components/ConnectStore"
import { soldier } from "@/store/action/soldier"
import logPic from "../../assets/images/map/log.png"
import thingPic from "../../assets/images/map/things.png"
import Background from "@/components/Background"
import { useHistory } from "react-router"
import { THING_SYSTEM_PAGE, LOG_PAGE } from "@/lib/constant/router_path"
import starPic from "../../assets/images/map/star.png"
import { NODE_LIST } from "@/lib/data/map"
import { createLinePoints, useX, useY, canMove } from "@/lib/commons/map"
import { IPointType } from "@/interfaces/map"
import { DELAY_TIME, STAR_WIDTH, STAR_HEIGHT, OFFSET_X, OFFSET_Y, CAN_GO, NOT_GO_BACK, NOT_GO_BACK_TIP, NOT_REACH, NOT_REACH_TIP } from "@/lib/constant/map"
import clickBg from "../../assets/images/map/clickBg.png"
import { message } from "antd"

// TODO:物资


const timerList = []

const START_NODE = 0

const INIT_POINT = 0

let _roadPointList: IPointType[] = []

function GameMap({ soldierType }: IPageBaseProps) {
  const history = useHistory()
  const [pointIndex, setPointIndex] = React.useState(INIT_POINT)
  const [nodeIndex, setNodeIndex] = React.useState(START_NODE)
  const [isMoving, setMoving] = React.useState(false)

  const currentNode = NODE_LIST[nodeIndex]
  let isCanGo = CAN_GO
  let moveMessage = ""

  React.useEffect(() => {
    if (pointIndex < _roadPointList.length - 1) {
      setMoving(true)
      timerList.push(setTimeout(() => setPointIndex(pointIndex + 1), DELAY_TIME))
    } else {
      setMoving(false)
    }
    if (timerList.length >= 2) {
      clearTimeout(timerList.shift())
    }
  }, [pointIndex])

  React.useEffect(() => {
    _roadPointList = []  // 清空原来的路径坐标
    if (nodeIndex !== START_NODE) {
      setMoving(true)
      setPointIndex(INIT_POINT + 1)  // 触发动画
      currentNode.roadFlagPoint.forEach((item) => {
        _roadPointList = [..._roadPointList, ...createLinePoints(item.startPoint, item.endPoint)]
      })
    }
  }, [nodeIndex])

  return (
    <CPage bg={mapBg}>
      <div className="game-map" onClick={(e) => {
        console.log(e.pageX, e.pageY) // 坐标踩点  TODO: 生产环境去掉log
      }}>
        {
          NODE_LIST.map((item, index) =>
            <div
              key={item.name}
              style={{
                position: 'absolute',
                left: useX(item.x, item.nodeFlagSize) + 'px',
                top: useY(item.y, item.nodeFlagSize) + 'px'
              }}
              onClick={() => {
                isCanGo = canMove(nodeIndex, index)
                if (isCanGo > 0) {
                  setNodeIndex(index)
                } else {
                  if (isCanGo === NOT_GO_BACK) {
                    moveMessage = NOT_GO_BACK_TIP
                  } else if (isCanGo === NOT_REACH) {
                    moveMessage = NOT_REACH_TIP
                  }
                  message.warn(moveMessage)
                }
              }}
            >
              <div className='c-use-background c-clickable-item'
                style={{
                  width: item.nodeFlagSize + 'px',
                  height: item.nodeFlagSize + 'px'
                }}
              >
                <Background img={clickBg} />
              </div>
            </div>

          )
        }
        <div className=" " style={{
          position: "absolute",
          left: (isMoving ? useX(_roadPointList[pointIndex].x) : useX(currentNode.x)) + 'px',
          top: (isMoving ? useY(_roadPointList[pointIndex].y) : useY(currentNode.y)) + 'px'
        }}>
          <div className=" c-use-background" style={{
            width: STAR_WIDTH + "px",
            height: STAR_HEIGHT + "px"
          }}>
            <Background img={starPic} />
          </div>

        </div>
        <div className="tips-area">
          <div className="tips-item">所在位置： {currentNode.name}</div>
          <div className="tips-item">物质数量： 100</div>
        </div>
        <div className="game-menu">
          <div className="game-menu-item c-use-background c-clickable-item" onClick={() => {
            history.push(LOG_PAGE)
          }}>
            <Background img={logPic} />
          </div>
          <div className="game-menu-item c-use-background c-clickable-item" onClick={() => {
            history.push(THING_SYSTEM_PAGE)
          }}>
            <Background img={thingPic} />
          </div>
        </div>
      </div>

    </CPage>
  )
}

export default ConnectStore(GameMap)