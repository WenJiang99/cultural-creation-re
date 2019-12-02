import * as React from "react"
import "./index.less"
import ConnectStore from "@/components/ConnectStore"

function Story() {
  return (
    <div className="page">
      <div className="story-page">
        <div className="story-container">
          I AM Story PAGE
        </div>
      </div>
    </div>
  )
}

export default ConnectStore(Story)