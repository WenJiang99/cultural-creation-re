const HTML_WIDTH = 1500
const HTML_HEIGHT = 700
const PAGE_WIDTH = 1280
const PAGE_HEGIHT = 680
export const [STAR_WIDTH, STAR_HEIGHT] = [50, 50]
export const [INIT_X, INIT_Y] = [(HTML_WIDTH - PAGE_WIDTH) / 2, (HTML_HEIGHT - PAGE_HEGIHT) / 2]  // page节点窗口左上角顶点坐标
export const OFFSET_X = STAR_WIDTH / 2 + INIT_X
export const OFFSET_Y = STAR_HEIGHT / 2 + INIT_Y

export const BIG_NODE_TAG = 22
export const SMALL_NODE_TAG = 15

export const DELAY_TIME = 50 // 节点标记移动延时


export const NOT_GO_BACK = -1
export const NOT_REACH = -2
export const CAN_GO = 1

export const NOT_GO_BACK_TIP = '革命尚未成功，我辈绝不退步'
export const NOT_REACH_TIP = '当前关卡还没无法开启'


export const INIT_NODE_INDEX = 0