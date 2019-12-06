import { ILogActionType } from "@/interfaces/action"

export const SHOW_LOG_COUNT = 'show-log-count'

export function show(count: number): ILogActionType {
  return {
    type: SHOW_LOG_COUNT,
    count
  }
}