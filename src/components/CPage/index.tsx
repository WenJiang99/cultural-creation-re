import * as React from 'react'
import './index.less'
import Background from '../Background'
import PageMenuButton from '../PageMenuButton'

type Props = {
  bg?: string,
  onGoBack?: () => any
  onGoHome?: () => any
  onGoForward?: () => any
  children?: React.ReactNode
}

export default function CPage({ bg, children, onGoBack, onGoHome, onGoForward }: Props) {

  function handleGoBack() {
    onGoBack && onGoBack()
  }
  function handleGoHome() {
    onGoHome && onGoHome()
  }
  function handleGoForward() {
    onGoForward && onGoForward()
  }

  return (
    <div className="page">
      <PageMenuButton
        onGoBack={handleGoBack}
        onGoForward={handleGoForward}
        onGoHome={handleGoHome}
      />
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
