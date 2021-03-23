import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';

class App extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<div>
							<Header></Header>
							<Route path="/" exact component={Homepage}></Route>
							<Route exact path="/products" component={Products} />
							<Route path="/products/:id" exact component={ProductDetail}></Route>
						</div>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
