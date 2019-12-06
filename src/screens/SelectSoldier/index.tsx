import * as React from "react"
import "./index.less"
import CPage from "@/components/CPage"
import bg from "@/assets/images/soldier/bg.png"
import ConnectStore from "@/components/ConnectStore"
import center from "../../assets/images/soldier/center.png"
import red_2 from "../../assets/images/soldier/red-2.png"
import red_4 from "../../assets/images/soldier/red-4.png"
import red_25 from "../../assets/images/soldier/red-25.png"
import submitPic from "../../assets/images/soldier/submit.png"
import Background from "@/components/Background"
import { IPageBaseProps } from "@/interfaces/page"
import { RED_CENTER, RED_2, RED_4, RED_25, NOT_SELECT_TIP } from "@/lib/constant/soldier"
import { useHistory } from "react-router"
import { HOME_PAGE, BEFORE_GAME_PAGE, GAME_MAP_PAGE } from "@/lib/constant/router_path"
import { useDispatch } from "react-redux"
import { Modal, message } from "antd"

const SOLDIER_LIST = [
  {
    pic: center,
    type: RED_CENTER
  }, {
    pic: red_2,
    type: RED_2
  }, {
    pic: red_4,
    type: RED_4
  }, {
    pic: red_25,
    type: RED_25
  }]

const INIT_INDEX = -1

type Props = {

} & IPageBaseProps

let _type

function SelectSoldier({ }: Props) {

  const history = useHistory()
  const dispatch = useDispatch()

  const [currentIndex, setIndex] = React.useState(INIT_INDEX)

  return (
    <CPage bg={bg}>
      <div className="select-soldier">
        <div className="soldier-container">
          {
            SOLDIER_LIST.map((item, index) =>
              <div className={"soldier-item c-use-background " + (index === currentIndex ? 'selected-item' : 'clickable-item')}
                key={item.pic}
                onClick={() => {
                  setIndex(index)
                  _type = item.type

                }}
              >
                <Background img={item.pic}></Background>
              </div>
            )
          }
        </div>
        <div className="submit-area">
          <div className="submit-button c-use-background c-clickable-item" onClick={() => {
            if (currentIndex === INIT_INDEX) {
              message.warning({
                content: NOT_SELECT_TIP,
                duration: 3.5
              })
            } else {
              dispatch({ type: _type })
              history.push(GAME_MAP_PAGE)
            }
          }}>
            <Background img={submitPic} />
          </div>
        </div>
      </div>
    </CPage>
  )
}

export default ConnectStore(SelectSoldier)