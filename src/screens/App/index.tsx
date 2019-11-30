import React, { lazy, Suspense } from "react"
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../../store"
import './index.less'
import "../../assets/styles/common.less"

const Home = lazy(() => import(/*webpackChunkName:"home"*/"../Home"))
// const Login = lazy(() => import(/*webpackChunkName:"login"*/"../Login"))


const Store = store

export default function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/home" component={Home} />
            {/* <Route path="/login" component={Login} />
            <Route path="/user" component={User} /> */}
            <Redirect from="" to={"/home"} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}
