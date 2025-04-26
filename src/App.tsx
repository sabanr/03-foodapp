import { useState } from 'react';
import Recipe from './types/Recipe.ts';
import Search from './components/Search';

const App: React.FC = () => {
	const [foodData, setFoodData] = useState<Recipe[]>([]);

	return (
		<div className="App">
			<Search foodData={foodData} setFoodData={setFoodData} />
			{foodData.map((recipe) => (
				<div key={recipe.id}>
					<h1>{recipe.title}</h1>
					<img src={recipe.image} alt={recipe.title} />
				</div>
			))}
		</div>
	);
};
export default App;
