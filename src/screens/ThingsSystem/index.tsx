import * as React from "react"
import "./index.less"
import CPage from "@/components/CPage"
import bg from "../../assets/images/things/bg.png"
import cropPic from "../../assets/images/things/crop.png"
import fishPic from "../../assets/images/things/fish.png"
import Background from "@/components/Background"
import ConnectStore from "@/components/ConnectStore"
import { useHistory } from "react-router"
import { FISH_PAGE, GAME_WELCOME_ROUTER, GAME_WELCOME_PAGE } from "@/lib/constant/router_path"
import CTimer from "@/components/CTimer"
import { FISH_GAME_NAME, FISH_GAME } from "@/lib/constant/game"

function ThingsSystem() {
  const history = useHistory()
  return (
    <CPage bg={bg}>
      <div className="things-system">
        <div className="things-item c-use-background" onClick={() => {
          // history.push(FISH_PAGE)
          history.push(GAME_WELCOME_ROUTER+FISH_GAME)
        }}>
          <Background img={fishPic} />
        </div>
        <div className="things-item c-use-background">
          <Background img={cropPic} />
        </div>
      </div>
    </CPage>
  )
}

export default ConnectStore(ThingsSystem)