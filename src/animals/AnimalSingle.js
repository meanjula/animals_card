import React from 'react';
import{useParams} from 'react-router-dom';

function AnimalSingle(props) {
	let{animal}=useParams();
	return (
		<div>
			This is page for {animal}
		</div>
	);
}

export default AnimalSingle;