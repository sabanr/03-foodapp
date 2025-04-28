import { useState } from 'react';

import Nav from './components/Nav';
import Recipe from './types/Recipe.ts';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Container from './components/Container.tsx';
import InnerContainer from './components/InnerContainer.tsx';

import './App.css';

const App: React.FC = () => {
	const [foodData, setFoodData] = useState<Recipe[]>([]);

	return (
		<div className="App">
			<Nav />
			<Search foodData={foodData} setFoodData={setFoodData} />
			<Container>
				<InnerContainer>
					<FoodList foodData={foodData} />
				</InnerContainer>
			</Container>
		</div>
	);
};
export default App;
