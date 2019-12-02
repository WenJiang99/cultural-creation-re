import * as React from 'react'
import './index.less'
import { RouteComponentProps, useHistory } from 'react-router'
import { Button, Icon } from 'antd'
import { PointType } from '../../lib/commons/map'
import { MAX_Z_INDEX } from '../../lib/commons/background'
import { HOME_PAGE } from '@/lib/constant/router_path'


export default function PageMenuButton() {
  const history = useHistory()

  const BOUNDARY_POINT: PointType = {
    x: window.innerWidth * 0.85,
    y: window.innerHeight * 0.85
  }

  const INIT_POSITION: PointType = {
    x: window.innerWidth / 2,
    y: 10
  }

  const BOUNDARY_RANGE: number = 20

  function moveButton(e) {
    let [x, y] = [e.pageX, e.pageY]
    let targetX, targetY
    if (x < BOUNDARY_RANGE) {
      targetX = BOUNDARY_RANGE
    } else if (x > +BOUNDARY_POINT.x - BOUNDARY_RANGE) {
      targetX = +BOUNDARY_POINT.x - BOUNDARY_RANGE
    } else {
      targetX = x
    }

    if (y < BOUNDARY_RANGE) {
      targetY = BOUNDARY_RANGE
    } else if (y > +BOUNDARY_POINT.y - BOUNDARY_RANGE) {
      targetY = +BOUNDARY_POINT.y - BOUNDARY_RANGE
    } else {
      targetY = y
    }
    setPosition({
      x: targetX,
      y: targetY
    })
    // x < BOUNDARY_RANGE || x < (+BOUNDARY_POINT.x - BOUNDARY_RANGE) && y > BOUNDARY_RANGE && y < (+BOUNDARY_POINT.y - BOUNDARY_RANGE) && setPosition({ x, y })
  }

  const [position, setPosition] = React.useState(INIT_POSITION)
  const [showButton, setShowButton] = React.useState(false)
  return (
    <div className={"button-group c-column-center " + (showButton ? "" : "onshow-button-animation")} draggable
      onDragEnd={moveButton}
      style={{
        top: position.y,
        left: position.x,
        zIndex: MAX_Z_INDEX
      }}
    >
      <div className="button-opener">
        <Button
          size="large"
          onClick={() => setShowButton(!showButton)}
        >
          <Icon type='plus-circle' spin />
        </Button>
      </div>
      {
        showButton ? <div className="button-list c-row-center">

          <div className="button-item">
            <Button onClick={() => history.goBack()}>
              <Icon type='double-left'></Icon>
            </Button>
          </div>
          <div className="button-item">
            <Button onClick={() => history.push(HOME_PAGE)}>
              <Icon type='home'></Icon>
            </Button>
          </div>
          <div className="button-item">
            <Button onClick={() => history.goForward()}>
              <Icon type='double-right'></Icon>
            </Button>
          </div>
        </div>
          :
          null
      }
    </div>
  )
}
