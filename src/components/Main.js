import React from "react";
import AnimalListClas from '../animals/AnimalListClas';
import Home from "./Home";
import About from './About'
import { Switch,Route } from "react-router-dom";

// switch is switching option of route and render according to link clicked in nav. All page remain same only main gets changed according to path provided.
const Main = () => {
	return (
		<main>
		  <Switch>
			  <Route path="/" exact component={Home}/>
			  <Route path="/AnimalListClas" component={AnimalListClas}/>
			  <Route path="/About" component={About}/>
		  </Switch>
		</main>
	);
};
export default Main;