import * as React from "react"
import { Spin } from "antd"
import "./index.less"

interface Props {
  text: string
}
export default function Loading({ text }: Props) {

  return (
    <div className="loading-component">
      <div className="root">
        <Spin tip={text} size="large" />
      </div>
    </div>
  )
}