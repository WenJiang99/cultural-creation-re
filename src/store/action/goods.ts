import * as React from 'react'
import { IGoodsActionType } from '@/interfaces/action'

export const ADD_THINGS = 'add-things'
export const CONSUME_THINGS = 'consume-things'

export function add(count: number): IGoodsActionType {
  return {
    type: ADD_THINGS,
    count
  }
}

export function consume(count: number): IGoodsActionType {
  return {
    type: CONSUME_THINGS,
    count
  }
}