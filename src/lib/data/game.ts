import { FISH_GAME, FISH_GAME_NAME } from "../constant/game";
import { IGameType } from "@/interfaces/game";
import { SECOND } from "../constant/timer";
import { FISH_PAGE, FISH_PAGE_ROUTER } from "../constant/router_path";


const DEFAULT_TIME = 15*SECOND
export const GAME_DATA :IGameType= {
  [FISH_GAME]:{
    name:FISH_GAME_NAME,
    time:DEFAULT_TIME,
    path:FISH_PAGE,
    router:FISH_PAGE_ROUTER,
    intruduction:{
      detail:`
      游戏开始后，你将获得15秒的时间进行捕鱼。

      在游戏开始后，游戏页面上将会随机出现鱼群，你可以点击出现的鱼，进行“捕鱼”。
      
      游戏结束后，将会根据你所捕到的鱼的数量兑换成相应的奖励。
`
    }
  }

}