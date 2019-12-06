import * as React from "react"
import { RouterProps } from "react-router"
import { increase, decrease } from "../../store/action/counter"
import { connect } from "react-redux"
import { soldier } from "@/store/action/soldier"
import { IMapedDispatch, IMapedState } from "@/interfaces/redux"
import { ReduxStateType } from "@/interfaces/state"

const mapStateToProps = (state: ReduxStateType) => {
  return {
    soldier: state.soldier,
    node: state.node,
    goods: state.goods,
    log: state.log
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setSoldierType(type: string) {
      const _type = soldier(type)
      dispatch(_type)
    }
  }
}

export default function ConnectStore(Component) {
  return connect(mapStateToProps, mapDispatchToProps)(Component)
}