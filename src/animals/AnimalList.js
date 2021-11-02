import React from 'react';
import {animals} from './animals';
import AnimalCard from './AnimalsCard'
import {Switch,Route,useRouteMatch} from 'react-router-dom'
import AnimalSingle from './AnimalSingle';

const AnimalList = () => {
	const match= useRouteMatch();
	const animalsListing=animals.map(animal=>(
		<div className="card">
			<AnimalCard key={animal.name} name={animal.name}/>	
		</div>
	))
	return (
		<div className="container">
			<Switch>
				<Route exact path={match.path}>{animalsListing}</Route>
				<Route path={`${match.path}/:animal`}>
					<AnimalSingle/>
				</Route>
			</Switch>
		</div>
	);
};

export default AnimalList;