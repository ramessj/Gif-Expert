import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifCard} from './GifCard'
import PropTypes from 'prop-types'



export const GifGrid = ({ category }) => {
	const { gifs, isLoading } = useFetchGifs(category)

	return (
		<div className="cardsContainer">
			<div className="cardsTitle">
				<h3>{ category }</h3>
			</div>
			{
				isLoading && (<h3>Cargando...</h3>)
			}
			<div className="card-grid">
				{ gifs.map((gif) => (
					<GifCard key={ gif.id } { ...gif } />
				)) }
			</div>
		</div>
	)
}

GifGrid.propTypes = { 
	category: PropTypes.string.isRequired
}