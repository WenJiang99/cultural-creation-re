import * as React from "react"
import "./index.less"
import { IPageBaseProps } from "@/interfaces/page"
import CPage from "@/components/CPage"
import mapBg from "../../assets/images/map/mapBg.png"
import ConnectStore from "@/components/ConnectStore"
import { soldier } from "@/store/action/soldier"
import logPic from "../../assets/images/map/log.png"
import thingPic from "../../assets/images/map/things.png"
import Background from "@/components/Background"
import { useHistory } from "react-router"
import { THING_SYSTEM_PAGE, LOG_PAGE, HOME_PAGE } from "@/lib/constant/router_path"
import starPic from "../../assets/images/map/star.png"
import { NODE_LIST } from "@/lib/data/map"
import { createLinePoints, useX, useY, canMove } from "@/lib/commons/map"
import { IPointType } from "@/interfaces/map"
import { DELAY_TIME, STAR_WIDTH, STAR_HEIGHT, OFFSET_X, OFFSET_Y, CAN_GO, NOT_GO_BACK, NOT_GO_BACK_TIP, NOT_REACH, NOT_REACH_TIP, INIT_NODE_INDEX } from "@/lib/constant/map"
import clickBg from "../../assets/images/map/clickBg.png"
import { message, notification, Button, Icon, Drawer } from "antd"
import { useDispatch } from "react-redux"
import { setNode } from "@/store/action/node"
import { getStore } from "@/store"
import { show } from "@/store/action/log"
import mailPic from "../../assets/images/map/mail.png"
import optionsPic from "../../assets/images/map/options.png"
import buttonBg from "../../assets/images/buttonBg.png"

// TODO:物资计算策略

console.log(document.body.getBoundingClientRect())

const timerList = []

const START_NODE = 0

const INIT_POINT = 0

let _roadPointList: IPointType[] = []
let _isFirst = true

function GameMap({ soldier, node, goods }: IPageBaseProps) {
  const history = useHistory()
  const dispatch = useDispatch()
  if (!soldier.soldierType) {
    history.replace(HOME_PAGE)
  }

  const [pointIndex, setPointIndex] = React.useState(INIT_POINT)
  const [_nodeIndex, setNodeIndex] = React.useState(node.nodeIndex)
  const [isMoving, setMoving] = React.useState(false)
  const [showMail, setShowMail] = React.useState(false)
  const [showOptions, setShowOptions] = React.useState(false)

  const currentNode = NODE_LIST[_nodeIndex]
  let isCanGo = CAN_GO

  function saveIndex() {
    dispatch(setNode(_nodeIndex))
  }

  React.useEffect(() => {

    if (isMoving && pointIndex < _roadPointList.length - 1) {
      setMoving(true)
      timerList.push(setTimeout(() => setPointIndex(pointIndex + 1), DELAY_TIME))
    } else {  // 已经走完了当前的路段到达了目标节点
      setMoving(false)
      setPointIndex(INIT_POINT)
    }
    if (timerList.length >= 2) {
      clearTimeout(timerList.shift())
    }
  })

  React.useEffect(() => {
    _roadPointList = []  // 清空原来的路径坐标
    if (_nodeIndex !== START_NODE && _nodeIndex !== node.nodeIndex) {  // 当前位置不是第一个节点、从其他页面回到地图页面时候都不触发动画
      setMoving(true)
      currentNode.roadFlagPoint.forEach((item) => {
        _roadPointList = [..._roadPointList, ...createLinePoints(item.startPoint, item.endPoint)]
      })
      setPointIndex(INIT_POINT + 1)  // 触发动画

    }
    saveIndex()
    dispatch(show(_nodeIndex + 2))
    if (node.nodeIndex !== _nodeIndex || _isFirst) {
      _isFirst = false
      const key = `open${Date.now()}`
      notification.open({
        key: key,
        message: 'Tips',
        description: '您的日志有更新啦!',
        duration: 4,
        style: {
          width: '300px',
          backgroundColor: 'rgba(ff,ff,ff,0.7)'
        },
        icon: <Icon type="message" style={{ color: '#108ee9' }} />,
        btn: (
          <Button onClick={() => {
            notification.close(key)
            history.push(LOG_PAGE)
          }}>立即去查看</Button>
        ),
        onClose: () => { }
      })
    }

  }, [_nodeIndex])

  return (
    <CPage bg={mapBg} onGoHome={saveIndex} onGoForward={saveIndex} onGoBack={saveIndex}>
      <div className="game-map" onClick={(e) => {
        console.log(e.pageX, e.pageY) // 坐标踩点  TODO: 生产环境去掉log
      }}>
        {
          NODE_LIST.map((item, index) =>
            <div
              key={item.name}
              style={{
                position: 'absolute',
                left: useX(item.x, item.nodeFlagSize) + 'px',
                top: useY(item.y, item.nodeFlagSize) + 'px'
              }}
              onClick={() => {
                isCanGo = canMove(_nodeIndex, index)
                if (isCanGo > 0) {

                  setNodeIndex(index)
                } else {
                  if (isCanGo === NOT_GO_BACK) {
                    message.warn(NOT_GO_BACK_TIP)
                  } else if (isCanGo === NOT_REACH) {
                    message.warn(NOT_REACH_TIP)
                  }
                }
              }}
            >
              <div className='c-use-background c-clickable-item'
                style={{
                  width: item.nodeFlagSize + 'px',
                  height: item.nodeFlagSize + 'px'
                }}
              >
                <Background img={clickBg} />
              </div>
            </div>

          )
        }
        <div className=" " style={{
          position: "absolute",
          left: (isMoving ? useX(_roadPointList[pointIndex].x) : useX(currentNode.x)) + 'px',
          top: (isMoving ? useY(_roadPointList[pointIndex].y) : useY(currentNode.y)) + 'px'
        }}>
          <div className=" c-use-background" style={{
            width: STAR_WIDTH + "px",
            height: STAR_HEIGHT + "px"
          }}>
            <Background img={starPic} />
          </div>

        </div>
        <div className="tips-area">
          <div className="tips-item">所在位置： {currentNode.name}</div>
          <div className="tips-item">物质数量： {goods.count}</div>
        </div>
        <div className="game-menu">
          <div className="game-menu-item c-use-background c-clickable-item" onClick={() => {
            setMoving(false)
            history.push(LOG_PAGE)
          }}>
            <Background img={logPic} />
          </div>
          <div className="game-menu-item c-use-background c-clickable-item" onClick={() => {
            setMoving(false)
            history.push(THING_SYSTEM_PAGE)
          }}>
            <Background img={thingPic} />
          </div>
          <div className="game-menu-item c-use-background c-clickable-item" onClick={() => {
            setShowMail(true)
          }}>
            <Background img={mailPic} />
          </div>
          <div className="game-menu-item c-use-background c-clickable-item" onClick={() => {
            setShowOptions(true)
          }}>
            <Background img={optionsPic} />
          </div>
        </div>
      </div>
      <Drawer
        title="邮箱系统"
        keyboard
        placement="right"
        closable={true}
        onClose={() => setShowMail(false)}
        visible={showMail}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Drawer
        title="游戏选项"
        keyboard
        placement="right"
        closable={true}
        onClose={() => setShowOptions(false)}
        visible={showOptions}
      >
        <div className="options-container">
          <div className="c-use-background c-clickable-item"
            style={{
              width: '100%',
              height: 'fit-content',
              margin: '20px',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Background img={buttonBg} />
            游戏存档
          </div>
          <div className="options-item c-use-background c-clickable-item">
            <Background img={buttonBg} />
            游戏删档
          </div>
          <div className="options-item c-use-background c-clickable-item">
            <Background img={buttonBg} />
            历史知识讲堂
          </div>
        </div>
      </Drawer>
    </CPage>
  )
}

export default ConnectStore(GameMap)