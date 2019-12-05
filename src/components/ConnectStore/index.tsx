import * as React from "react"
import { RouterProps } from "react-router"
import { increase, decrease } from "../../store/action/counter"
import { connect } from "react-redux"
import { ReduxStateType } from "../../store"
import { soldier } from "@/store/action/soldier"
import { IMapedDispatch, IMapedState } from "@/interfaces/redux"

const mapStateToProps = (state: ReduxStateType) => {
  return {
    soldierType: state.soldierType,
    nodeIndex: state.nodeIndex
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