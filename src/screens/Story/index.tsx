import * as React from "react"
import "./index.less"
import ConnectStore from "@/components/ConnectStore"
import CPage from "@/components/CPage"
import bg from "../../assets/images//home/storyBg.png"
import CElement from "@/components/CElement"
import { STORY } from "@/lib/data/story"
import ScrollableArea from "@/components/ScrollableArea"
function Story() {
  return (
    <CPage bg={bg} >
      <div className="story">
        <div className="story-container">
          <div className="story-info-wrapper c-use-scrollable c-auto-line">
            <div className="c-scrollable-wrapper-y">
              {STORY}
            </div>
          </div>
        </div>
      </div>
    </CPage>
  )
}

export default ConnectStore(Story)