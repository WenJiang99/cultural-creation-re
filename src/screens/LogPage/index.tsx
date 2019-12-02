import * as React from "react"
import './index.less'
import CPage from "@/components/Page"
import ConnectStore from "@/components/ConnectStore"

import bg from "../../assets/images/log/bg.png"
import tagBg from "../../assets/images/log/tagBg.png"
import { LOG_DATA } from "@/lib/data/log"
import Background from "@/components/Background"
import ScrollableArea from "@/components/ScrollableArea"
import { LOG_PAGE } from "@/lib/constant/router_path"

const INIT_INDEX = -1
function LogPage() {

  const [currentIndex, setIndex] = React.useState(INIT_INDEX)
  return (
    <CPage bg={bg}>
      <div className="log-page">
        <div className="date-container">
          <div className="date-wrapper">
            {LOG_DATA.map((item, index) =>
              <div className={"date-item c-use-background  " + (index === currentIndex ? 'c-selected-item' : 'c-clickable-item')} key={item.date + index} onClick={() => {
                setIndex(index)
              }}>
                <Background img={tagBg} />
                <div className="date-item-text">
                  {item.date}
                </div>
              </div>
            )}
          </div>
        </div>
        {
          currentIndex !== INIT_INDEX && <div className="log-info">
            <div className="log-info-title">
              <div className="title-date">
                日期：
              </div>
              <div className="title-value">
                {LOG_DATA[currentIndex].date}
              </div>
            </div>
            <div className="log-info-text c-use-scrollable">
              <div className="c-scrollable-wrapper-y">
                {LOG_DATA[currentIndex].text}
              </div>
            </div>
          </div>
        }
      </div>

    </CPage>
  )
}

export default ConnectStore(LogPage)