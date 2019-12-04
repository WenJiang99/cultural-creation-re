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

// TODO: 位置、物资

const currentNoe = NODE_LIST.pop()
const [STAR_WIDTH, STAR_HEIGHT] = [50, 50]
const [INIT_X, INIT_Y] = [110, 10]
const OFFSET_X = STAR_WIDTH / 2 + INIT_X
const OFFSET_Y = STAR_HEIGHT / 2 + INIT_Y

function GameMap({ soldierType }: IPageBaseProps) {
  const history = useHistory()
  const _ref = React.useRef(null)
  // console.log(_ref && _ref.current.getBoundingClientRect())
  return (
    <CPage bg={mapBg}>
      <div className="game-map" ref={_ref} onClick={(e) => {
        console.log(e.pageX, e.pageY)
        console.log(e.target["clientX"])
      }}>
        <div className=" " style={{
          position: "absolute",
          left: (currentNoe.x - OFFSET_X) + "px",
          top: (currentNoe.y - OFFSET_Y) + "px"
        }}>
          <div className=" c-use-background" style={{
            width: STAR_WIDTH + "px",
            height: STAR_HEIGHT + "px"
          }}>
            <Background img={starPic} />
          </div>

        </div>
        <div className="tips-area">
          <div className="tips-item">所在位置： 瑞金</div>
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