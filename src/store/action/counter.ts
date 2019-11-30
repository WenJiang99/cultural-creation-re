export const INCREASEMENT = 'INCREASEMENT'
export const DECREASEMENT = 'DECREASEMENT'
export const RESET = 'RESET'

export interface ActionBase {
  type: string
}
export type ActionType = {
  [k: string]: any
} & ActionBase

export function increase(): ActionType {
  return {
    type: INCREASEMENT,
    message: 'increase'
  }
}

export function decrease(): ActionType {
  return {
    type: DECREASEMENT
  }
}

export function reset(): ActionType {
  return {
    type: RESET
  }
}