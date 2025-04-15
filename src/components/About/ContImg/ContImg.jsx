import React from 'react'
import "./ContImg.scss";

export default function ContImg({img}) {
  return (
	<div className="ContImg">
	  <div className='ContImg_container'>
		<img src={`/img/${img}.png`} alt="about" />
	  </div>
	</div>
  )
}
