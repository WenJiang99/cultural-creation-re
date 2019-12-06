import * as React from 'react'
import './index.less'
import { GAME_DATA } from '@/lib/data/game'
import Background from '../Background'
import buttonBg from "../../assets/images/buttonBg.png"
import { Result, Button } from 'antd'

type Props = {
	name: string
	message?: string
	onReplay?: () => void
	onExit?: () => void
	onSubmit?: () => void
	children?: React.ReactNode

}

const DEFAULT_MESSAGE = '恭喜你获得如下奖励'

export default function CGameResult({ name, message, onExit, onReplay, onSubmit, children }: Props) {

	function handleReplay() {
		onReplay && onReplay()
	}
	function handleExit() {
		onExit && onExit()
	}

	function handleSubmit() {
		onSubmit && onSubmit()
	}
	const data = GAME_DATA[name]

	return (
		<div className="game-result">
			<div className="game-message">{message || DEFAULT_MESSAGE}</div>
			<div className="game-vlaue">
			</div>
			<div className="button-groups">
				<div className="button-item c-use-background c-clickable-item" onClick={() => {
					handleReplay()
				}}>
					<Background img={buttonBg} />
					重玩

				</div>
				<div className="button-item c-use-background c-clickable-item" onClick={() => {
					handleExit()
				}}>
					<Background img={buttonBg} />
					退出
				</div>
				{/* <div className="button-item c-use-background c-clickable-item" onClick={() => {
					handleSubmit()
				}}>
					<Background img={buttonBg} />
					确认
				</div> */}
			</div>


		</div>
	)
}