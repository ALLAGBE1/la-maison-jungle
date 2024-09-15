import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{/* {plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        <PlantItem name={name} cover={cover} id={id} light={light} water={water} />
					</li>
				))} */}

{plantList.map(({name, cover, id, light, water}) => (
					<PlantItem name={name} cover={cover} id={id} light={light} water={water} />
				))}
			</ul>

		</div>
	)
}

export default ShoppingList