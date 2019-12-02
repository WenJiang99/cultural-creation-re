import * as React from "react"
import "./index.less"
import { IPageBaseProps } from "@/interfaces/page"
import CPage from "@/components/Page"
import mapBg from "../../assets/images/map/mapBg.png"
import ConnectStore from "@/components/ConnectStore"
import { soldier } from "@/store/action/soldier"
import logPic from "../../assets/images/map/log.png"
import thingPic from "../../assets/images/map/things.png"
import Background from "@/components/Background"
import { useHistory } from "react-router"
import { THING_SYSTEM_PAGE, LOG_PAGE } from "@/lib/constant/router_path"


// TODO: 位置、物资

function GameMap({ soldierType }: IPageBaseProps) {
  const history = useHistory()
  return (
    <CPage bg={mapBg}>
      <div className="game-map">
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