import * as React from 'react'
import './index.less'
import Background from '../Background'
import PageMenuButton from '../PageMenuButton'

type Props = {
  bg?: string
  children?: React.ReactNode
}

export default function CPage({ bg, children }: Props) {

  return (
    <div className="page">
      <PageMenuButton />
      {
        bg ?
          <div className="C-page-root c-full-page c-use-background">
            <Background img={bg} />
            <div className="C-page-container">
              {children}
            </div>
          </div>
          :
          <div className="C-page-root c-full-page">
            <div className="C-page-container">
              {children}
            </div>
          </div>
      }

    </div>
  )
}
