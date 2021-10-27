import React from 'react';
import { animals } from './animals';
import AnimalCard from './AnimalsCard'

const AnimalList = () => {
	return (
		<div className="container">
			{animals.map(animal=>(
				<div className="card">
					<AnimalCard key={animal.name} name={animal.name}/>	
				</div>
			))}	
		</div>
	);
};

export default AnimalList;