import * as React from 'react'
import './index.less'
import Background from '../Background'
import { message } from 'antd'
import { BULLET_MAX_X, BULLET_MIN_X, BULLET_MAX_Y, BULLET_ROLE_STEP, BULLET_ROLE_SIZE } from '@/lib/constant/game'
import { MAX_Z_INDEX } from '@/lib/commons/background'

type Props = {
  img: string
  onKeyDown?: (any) => void
  onMove?: (x: number) => void

}

export default function CKeyMoveElement({ img, onKeyDown, onMove }: Props) {
  const _ref = React.useRef(null)
  const [x, setX] = React.useState((BULLET_MAX_X - BULLET_MIN_X) / 2)
  React.useEffect(() => {

    document.addEventListener('keydown', (e) => {

      switch (e.keyCode) {
        case 37: {
          let _x;
          setX(x => {
            _x = x - BULLET_ROLE_STEP
            if (_x <= BULLET_MIN_X) {
              _x = BULLET_MIN_X
            }
            onMove && onMove(_x)
            return _x
          })

          break
        }
        case 39: {
          let _x;
          setX(x => {
            _x = x + BULLET_ROLE_STEP
            if (_x >= BULLET_MAX_X - BULLET_ROLE_SIZE / 2) {
              _x = BULLET_MAX_X
            }

            onMove && onMove(_x)
            return _x
          })

          break
        }
      }

    })
  }, [])

  return (
    <div className="key-move-element"
      ref={_ref}
      style={{
        position: 'absolute',
        left: x + 'px',
        top: (BULLET_MAX_Y / 2) + 'px',
        zIndex: MAX_Z_INDEX,
      }}
    >
      <div className="element-area c-use-background"
        style={{
          width: BULLET_ROLE_SIZE + "px",
          height: BULLET_ROLE_SIZE + 'px'
        }}>
        <Background img={img} />
      </div>
    </div>
  )
}