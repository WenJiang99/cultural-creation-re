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
import { createLinePoints, useX, useY } from "@/lib/commons/map"
import { IPointType } from "@/interfaces/map"
import { DELAY_TIME, STAR_WIDTH, STAR_HEIGHT, OFFSET_X, OFFSET_Y } from "@/lib/constant/map"
import clickBg from "../../assets/images/map/clickBg.png"

// TODO: 位置、物资


const timerList = []

const START_NODE = 0

let _roadPointList: IPointType[] = []

function GameMap({ soldierType }: IPageBaseProps) {
  const history = useHistory()
  const [pointIndex, setPointIndex] = React.useState(0)
  const [nodeIndex, setNodeIndex] = React.useState(START_NODE)

  const currentNode = NODE_LIST[nodeIndex]

  React.useEffect(() => {
    if (pointIndex < _roadPointList.length - 1) {
      timerList.push(setTimeout(() => setPointIndex(pointIndex + 1), DELAY_TIME))
    }
    if (timerList.length >= 2) {
      clearTimeout(timerList.shift())
    }
  }, [pointIndex])

  React.useEffect(() => {
    if (nodeIndex !== START_NODE) {
      currentNode.roadFlagPoint.forEach((item) => {
        _roadPointList = [..._roadPointList, ...createLinePoints(item.startPoint, item.endPoint)]
      })
    }
  }, [nodeIndex])

  return (
    <CPage bg={mapBg}>
      <div className="game-map" onClick={(e) => {
        console.log(e.pageX, e.pageY)
      }}>
        {
          NODE_LIST.map((item, index) =>
            <div
              key={item.name}
              style={{
                position: 'absolute',
                left: useX(item.x) + 'px',
                top: useY(item.y) + 'px'
              }}
              onClick={() => {
                setNodeIndex(index)
              }}
            >
              <div className='node-click-flag c-use-background c-clickable-item'
              >
                <Background img={clickBg} />
              </div>
            </div>

          )
        }
        <div className=" " style={{
          position: "absolute",
          // left: useX(_roadPointList[pointIndex].x) + 'px',
          // top: useY(_roadPointList[pointIndex].y) + 'px'
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