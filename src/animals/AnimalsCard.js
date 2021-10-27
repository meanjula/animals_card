import React from 'react';

const animalsCard = (props) => {
	return (
		<div className="animal-card">
		    <img src={`https://source.unsplash.com/1600x900/?${props.name}`} alt={props.name}/>
			<h2>{props.name}</h2>
		</div>
	);
};

export default animalsCard;