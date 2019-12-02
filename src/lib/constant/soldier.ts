import { ISoldierType } from "@/interfaces/soldier"

export const RED_CENTER: string = 'red_center'
export const RED_2: string = 'red_2'
export const RED_4: string = 'red_4'
export const RED_25: string = 'red_25'

export const SOLDIER_TYPE_LIST = [RED_CENTER, RED_2, RED_4, RED_25]

export const SOLDIER_DATA: ISoldierType = {

  [RED_CENTER]: {
    name: "中央红军"
  },
  [RED_4]: {
    name: "红四方面军"
  },
  [RED_2]: {
    name: "红二方面军"
  },
  [RED_25]: {
    name: "红二十五军"
  }
}