import React from 'react'
import './Card.scss'

export default function Card({textTitle,  textInfo}) {
  return (
	<div className='Card'>
	  <div className='Card_main'>
		<img src='./img/printscr.png'/>
		<p className='Card_main_first '>
			{textTitle}
		</p>
		<p className='Card_main_second'>
			{textInfo}
		</p>
	  </div>
	</div>
  )
}
