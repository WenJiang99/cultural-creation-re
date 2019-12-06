import React, { lazy, Suspense } from "react"
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "@/store"
import './index.less'
import "@/assets/styles/common.less"
import { HOME_PAGE, STORY_PAGE, BEFORE_GAME_PAGE, SELECT_SOLDIER_PAGE, GAME_MAP_PAGE, THING_SYSTEM_PAGE, LOG_PAGE, FISH_PAGE, STORY_GAME_PAGE, GAME_WELCOME_PAGE } from "@/lib/constant/router_path"
import Loading from "@/components/Loading"

const Home = lazy(() => import(/*webpackChunkName:"home"*/"../Home"))
const Story = lazy(() => import(/*webpackChunkName:"story"*/"../Story"))
const StoryGame = lazy(() => import(/*webpackChunkName:"beforegame"*/"../StoryGame"))
const SelectSoldier = lazy(() => import(/*webpackChunkName:"selectsoldier"*/"../SelectSoldier"))

const GameMap = lazy(() => import(/*webpackChunkName:"gamemap"*/"../GameMap"))
const ThingsSystem = lazy(() => import(/*webpackChunkName:"thingssystem"*/"../ThingsSystem"))
const LogPage = lazy(() => import(/*webpackChunkName:"logpage"*/"../LogPage"))
const FishPage = lazy(() => import(/*webpackChunkName:"thingssystem"*/"../Fish"))
const GameWelcome = lazy(() => import(/*webpackChunkName:"game"*/"../GameWelcome"))
const Store = store

export default function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Suspense fallback={<Loading text="精彩内容加载中"></Loading>}>
          <Switch>
            <Route path={HOME_PAGE} component={Home} />
            <Route path={STORY_PAGE} component={Story} />
            <Route path={STORY_GAME_PAGE} component={StoryGame} />
            <Route path={SELECT_SOLDIER_PAGE} component={SelectSoldier} />
            <Route path={GAME_MAP_PAGE} component={GameMap} />
            <Route path={THING_SYSTEM_PAGE} component={ThingsSystem} />
            <Route path={LOG_PAGE} component={LogPage} />
            <Route path={FISH_PAGE} component={FishPage} />
            <Route path={GAME_WELCOME_PAGE} component={GameWelcome} />
            <Redirect from="" to={HOME_PAGE} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}
