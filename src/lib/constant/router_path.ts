import { FISH_GAME } from "./game"

const getRouter = (path: string) => path.replace(/:.*$/, '')

export const HOME_PAGE = '/home'
export const STORY_PAGE = '/story'
export const BEFORE_GAME_PAGE = '/beforeGame'
export const GAME_RESULT_PAGE = '/gameResult'
export const GAME_WELCOME_PAGE = '/gameWelcome/:gameName'
export const GAME_WELCOME_ROUTER = getRouter(GAME_WELCOME_PAGE)
export const SELECT_SOLDIER_PAGE = '/selectSoldier'
export const GAME_MAP_PAGE = '/gameMap'
export const THING_SYSTEM_PAGE = '/thingsSystem'
export const LOG_PAGE = '/log'
export const FISH_PAGE = '/fish'
export const FISH_PAGE_ROUTER = getRouter(FISH_GAME)
export const STORY_GAME_PAGE = '/storyGame'

export const BULLET_GAME_PAGE = '/bulletGame'