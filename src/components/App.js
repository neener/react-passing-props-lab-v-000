import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter'

class App extends React.Component{
	constructor(){
		super();

		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null
		};
	}

	componentWillMount(){
		this.fetchFilters();
		this.fetchFruit();
	}

	fetchFilters = () => {
	    fetch('/api/fruit_types')
	      .then(response => response.json())
	      .then(filters => this.setState({ filters }));
  	}


	handleFilterChange = event => {
    	console.log('new filter: ', event.target.value);
    	this.setState({ selectedFilter: event.target.value });
  	}

	fetchFruit = () => {
		fetch('/api/fruit')
	      .then(response => response.json())
	      .then(fruit => this.setState({ fruit }));
	}

	render(){
		return(
			<div>
				<Filter handleChange={this.handleFilterChange} />
        		<FruitBasket
          		filter={this.state.selectedFilter} />
			</div>
		)
	}
}

export default App;
