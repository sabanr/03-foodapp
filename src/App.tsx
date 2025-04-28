import { useState } from 'react';

import Nav from './components/Nav';
import Recipe from './types/IRecipe.ts';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Container from './components/Container.tsx';
import InnerContainer from './components/InnerContainer.tsx';

import './App.css';
import FoodDetails from './components/RecipeDetails.tsx';

const App: React.FC = () => {
	const [foodData, setFoodData] = useState<Recipe[]>([]);
	const [recipeId, setRecipeId] = useState<number>(0);

	const handleRecipeSelect = (id: number) => {
		setRecipeId(id);
		console.log(`Selected recipe ID: ${id}`);
	};

	return (
		<div className="App">
			<Nav />
			<Search foodData={foodData} setFoodData={setFoodData} />
			<Container>
				<InnerContainer>
					<FoodList
						onRecipeSelect={handleRecipeSelect}
						foodData={foodData}
					/>
				</InnerContainer>
				<InnerContainer>
					<FoodDetails recipeId={recipeId} />
				</InnerContainer>
			</Container>
		</div>
	);
};
export default App;
