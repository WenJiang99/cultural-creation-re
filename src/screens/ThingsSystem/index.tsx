import * as React from "react"
import "./index.less"
import CPage from "@/components/Page"
import bg from "../../assets/images/things/bg.png"
import cropPic from "../../assets/images/things/crop.png"
import fishPic from "../../assets/images/things/fish.png"
import Background from "@/components/Background"
import ConnectStore from "@/components/ConnectStore"
function ThingsSystem() {
  return (
    <CPage bg={bg}>
      <div className="things-system">
        <div className="things-item c-use-background">
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