import React, { Component} from 'react';
import Cardlist from './Components/Cardlist';
import Scroll from './Components/Scroll';
import { robots } from './Components/robots';
import './Containers/App.css';
import SearchBox from './Components/SearchBox';

/*STATE >> props*/

class App extends Component {

	constructor() {
		super()

		this.state = 
		{
			/*robots: robots,*/
			robots: [],
			searchfield: ''
			
		}
	}

componentDidMount() {

	fetch('https://jsonplaceholder.typicode.com/users')
	.then( response => response.json() )
	.then(users => 
		this.setState({robots: users}));

}

Onsearch = (event) =>
{
	this.setState({searchfield: event.target.value})

}

	render()
	{
		const { robots, searchfield } = this.state;
		
		const filteredRobots =this.state.robots.filter(robots =>  
			{
				return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			}
		)  

if (this.state.robots.length === 0) {
	return <h2 className = "f1 tc"> Loading... </h2>
}
else
{ 
	return (
				<div className = 'tc'>
					<h1 className = 'f2'> Welcome To React </h1>

					<SearchBox searchChange = {this.Onsearch}/>
							
							<Scroll>
									<Cardlist robots={filteredRobots}/>
							</Scroll>

				</div>
			);
		}
	}
}

export default App;