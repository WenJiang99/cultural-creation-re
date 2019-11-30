import * as React from "react"
import { RouterProps } from "react-router"
import { increase, decrease } from "../../store/action/counter"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add() {
      dispatch(increase())
    },
    subtract() {
      dispatch(decrease())
    }
  }
}

export default function ConnectStore(Component) {
  return connect(mapStateToProps, mapDispatchToProps)(Component)
}