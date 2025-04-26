import { useState } from 'react';
import Recipe from './types/Recipe.ts';
import Search from './components/Search';
import FoodList from './components/FoodList';

const App: React.FC = () => {
	const [foodData, setFoodData] = useState<Recipe[]>([]);

	return (
		<div className="App">
			<Nav />
			<Search foodData={foodData} setFoodData={setFoodData} />
			<FoodList foodData={foodData} />
		</div>
	);
};
export default App;
