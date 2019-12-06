import * as React from 'react'
import './index.less'
import { IPageBaseProps } from '@/interfaces/page'
import { useParams, useHistory } from 'react-router'
import CPage from '@/components/CPage'
import { GAME_DATA } from '@/lib/data/game'
import ConnectStore from '@/components/ConnectStore'
import welcomePic from "../../assets/images/game/welcome.png"
type Props = {

} & IPageBaseProps

function GameWelcome() {

  const { gameName } = useParams()
  const history = useHistory()
  const data = GAME_DATA[gameName]

  return (
    <CPage bg={welcomePic}>
      <div className="game-welcome">
        <div className="game-skip">
          <div className="game-skip-button c-clickable-item" onClick={() => history.push(data.path)}>跳过 >></div>
        </div>
        <div className="game-intruduction c-use-scrollale">
          <div className="c-scrollable-wrapper-y">
            {data.intruduction.detail}
          </div>
        </div>
      </div>

    </CPage>
  )

}

export default ConnectStore(GameWelcome)