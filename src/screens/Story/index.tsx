import * as React from "react"
import "./index.less"
import ConnectStore from "@/components/ConnectStore"
import CPage from "@/components/CPage"
import bg from "../../assets/images/things/bg.png"
import CElement from "@/components/CElement"
function Story() {
  return (
    <CPage bg={bg} >
      
    </CPage>
  )
}

export default ConnectStore(Story)