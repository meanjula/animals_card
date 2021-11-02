import React, { Component } from 'react';
import { animals } from './animals';
import AnimalsCard from './AnimalsCard';
import{Switch,Route} from "react-router-dom"
import AnimalSingle from './AnimalSingle';

class AnimalListClas extends Component {
	state={
		searchInput:"",
	};
	searchInputHandler=(e)=>{
		this.setState({
			searchInput: e.target.value
		})
		console.log(this.state.searchInput)
	};


	render(){
		const animalsFilter=animals.filter(animal=>{
			return animal.name
			.toLowerCase()
			.includes(this.state.searchInput.toLowerCase())
		});
		const animalsListing=animalsFilter.map((animal)=>(
			<AnimalsCard key={animal.name} name={animal.name}/>	
		));

		return (
			<div className="animalList">
				<Switch>
					<Route exact path={this.props.match.path}>
						<div className="input">
						<input 
					      type="text" 
					      onChange={this.searchInputHandler}
					      placeholder="Search an animal"/>
						</div>
					  {animalsListing}
					</Route>
					<Route  path={`${this.props.match.path}/:animal`}>
						<AnimalSingle/>
					</Route>
				</Switch>	
			</div>
		);
	}
}

export default (AnimalListClas);