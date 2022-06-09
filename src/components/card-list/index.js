import Card from '../card';

const CardList = ({ monsters }) => {
	return (
		<div className='card-list'>
			{monsters.map((monster) => (
				<Card monster={monster} />
			))}
		</div>
	);
};

export default CardList;
