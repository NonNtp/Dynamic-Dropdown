import React from 'react'

const Food = (props) => {
	return (
		<div className='single-food'>
			<h2>{props.foodName}</h2>
			<img src={props.image_url} alt={props.foodName} />
		</div>
	)
}

export default Food
