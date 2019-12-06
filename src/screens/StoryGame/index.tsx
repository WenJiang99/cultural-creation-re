import * as React from "react"
import "./index.less"
import ConnectStore from "@/components/ConnectStore"
import CPage from "@/components/CPage"
import storyBg from "@/assets/images/home/storyBg.png"
import Background from "@/components/Background"
import buttonBg from "@/assets/images/buttonBg.png"
import { ENCIRCLE_DATA } from "@/lib/data/encircle"
import ScrollableArea from "@/components/ScrollableArea"
import { SELECT_SOLDIER_PAGE } from "@/lib/constant/router_path"
import { useHistory } from "react-router"
import { IPageBaseProps } from "@/interfaces/page"

const ITEM_DATA = ["一", "二", "三", "四", "五"]
const INIT_INDEX = 4

function GameHome({ soldier }: IPageBaseProps) {

  const history = useHistory()
  const [currentIndex, setIndex] = React.useState(INIT_INDEX)
  // alert(soldierType + '   solider type')

  return (
    <CPage bg={storyBg}>
      <div className="game-home">
        <div className="item-list">
          {
            ITEM_DATA.map((item, index) =>
              <div className={"story-item c-use-background " + (index === currentIndex ? 'active-story-item' : 'clickable-item')} key={item} onClick={() => {
                setIndex(index)
              }}>
                <Background img={buttonBg} />
                <div className="story-item-text">
                  {`第${item}次围剿`}
                </div>
              </div>)
          }
        </div>
        <div className="story-container">
          {/* <ScrollableArea text={ENCIRCLE_DATA[currentIndex]} width='70%' type='y' />
           */}
          <div className="story-info-wrapper c-use-scrollable c-auto-line">
            <div className="c-scrollable-wrapper-y">
              {ENCIRCLE_DATA[currentIndex]}
            </div>
          </div>

        </div>
        <div className="skip-story">
          <div className="skip-button" onClick={() => history.push(SELECT_SOLDIER_PAGE)}>
            跳过 >>
            </div>
        </div>
      </div>
    </CPage>
  )
}

export default ConnectStore(GameHome)