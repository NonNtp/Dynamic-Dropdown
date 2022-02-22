import React, { useState } from 'react'

import Dropdown from './components/Dropdown'
import Food from './components/Food'
import MenuData from './data/MenuData'

const App = () => {
	const [foods, setFoods] = useState(MenuData)

	const changeFoodData = (event) => {
		const category = event.target.value
		if (category === 'เมนูทั้งหมด') {
			setFoods(MenuData)
		} else {
			const result = MenuData.filter((item) => {
				return item.menu === category
			})
			setFoods(result)
		}
	}

	return (
		<div className='container'>
			<Dropdown changeFoodData={changeFoodData} />
			<div className='content'>
				{foods.map((data, index) => {
					return <Food key={index} {...data} />
				})}
			</div>
		</div>
	)
}

export default App
