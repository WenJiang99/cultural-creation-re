import * as React from 'react'
import { Button } from "antd"
import ConnectStore from '../../components/ConnectStore'
import { useHistory } from 'react-router'

import './index.less'

type Props = {
  count
  add
  subtract
}

function Home({ count, add, subtract }: Props) {
  const history = useHistory()
  return (
    <div className="home-page c-column-all-center c-full-page">
      <div className="button-groups ">
        <Button onClick={() => { history.push("/login") }}>Login</Button>
        <Button onClick={() => history.goBack()}>Back</Button>
      </div>
      <div className="counter-container c-row-all-center">
        <Button onClick={add}>add</Button>
        <div className="counter-value">
          {count}
        </div>
        <Button onClick={subtract}>sub</Button>
      </div>
    </div>
  )
}

export default ConnectStore(Home)