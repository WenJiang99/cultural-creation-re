import * as React from "react"
import './index.less'
import CPage from "@/components/CPage"
import ConnectStore from "@/components/ConnectStore"

import bg from "../../assets/images/log/bg.png"
import tagBg from "../../assets/images/log/tagBg.png"
import { LOG_DATA } from "@/lib/data/log"
import Background from "@/components/Background"
import { LOG_PAGE, HOME_PAGE, GAME_MAP_PAGE, STORY_GAME_PAGE } from "@/lib/constant/router_path"
import { IPageBaseProps } from "@/interfaces/page"
import { useHistory } from "react-router"
import closePic from "../../assets/images/log/close.png"


const INIT_INDEX = 0
function LogPage({ log, soldier }: IPageBaseProps) {
  const history = useHistory()
  if (log.count === 0 || !soldier.soldierType) {
    history.replace(HOME_PAGE)
  }
  const [currentIndex, setIndex] = React.useState(INIT_INDEX)
  return (
    <CPage bg={bg}>
      <div className="log-page">
        <div className="log-close">
          <div className="log-close-button c-use-background c-clickable-item" onClick={() => {
            history.replace(STORY_GAME_PAGE)
          }}>
            <Background img={closePic} />
          </div>
        </div>
        <div className="log-container">
          <div className="date-container">
            <div className="date-wrapper">
              {LOG_DATA.map((item, index) => {
                if (index < log.count) {
                  return (<div className={"date-item c-use-background  " + (index === currentIndex ? 'c-selected-item' : 'c-clickable-item')} key={item.date + index} onClick={() => {
                    setIndex(index)
                  }}>
                    <Background img={tagBg} />
                    <div className="date-item-text">
                      {item.date}
                    </div>
                  </div>)
                }
              }
              )}
            </div>
          </div>
          {
            <div className="log-info">
              <div className="log-info-title">
                <div className="title-date">
                  日期：
              </div>
                <div className="title-value">
                  {LOG_DATA[currentIndex].date}
                </div>
              </div>
              <div className="log-info-text c-use-scrollable c-auto-line">
                <div className="c-scrollable-wrapper-y">
                  {LOG_DATA[currentIndex].text}
                </div>
              </div>
            </div>
          }
        </div>
      </div>

    </CPage>
  )
}

export default ConnectStore(LogPage)