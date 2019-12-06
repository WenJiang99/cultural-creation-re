import * as React from 'react'
import { useHistory } from 'react-router'
import ConnectStore from '@/components/ConnectStore'

import './index.less'
import Background from '@/components/Background'
import bg from "@/assets/images/home/bg.png"
import startGamePic from "@/assets/images/home/start-game.png"
import watchStoryPic from "@/assets/images/home/watch.png"
import CPage from '@/components/CPage'
import { BEFORE_GAME_PAGE, STORY_PAGE, GAME_MAP_PAGE, STORY_GAME_PAGE } from '@/lib/constant/router_path'
import { IPageBaseProps } from '@/interfaces/page'

type Props = {

} & IPageBaseProps

function Home({ soldier }: Props) {
  const history = useHistory()

  return (
    <CPage bg={bg}>
      <div className="home-page">
        <div className="home-menu">
          <div className="c-use-background home-menu-item " onClick={() => {
            if (soldier.soldierType) {
              history.push(GAME_MAP_PAGE)
            } else {
              history.push(STORY_GAME_PAGE)
            }
          }}>
            <Background img={startGamePic} opacity={1} />
          </div>
          <div className="c-use-background home-menu-item " onClick={() => {
            history.push(STORY_PAGE)  //  TODO: 剧情介绍页面
          }}>
            <Background img={watchStoryPic} opacity={1} />
          </div>
        </div>
      </div>

    </CPage>
  )
}

export default ConnectStore(Home)