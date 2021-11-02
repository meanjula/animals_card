import React from "react";
import AnimalList from '../animals/AnimalList';
import Home from "./Home";
import About from './About'
import { Switch,Route } from "react-router-dom";
// switch is switching option of route and render according to link clicked in nav. All page remain same only main gets changed according to path provided.
const Main = () => {
	return (
		<main>
		  <Switch>
			  <Route path="/" exact component={Home}/>
			  <Route path="/animalList" component={AnimalList}/>
			  <Route path="/about" component={About}/>
		  </Switch>
		</main>
	);
};
export default Main;