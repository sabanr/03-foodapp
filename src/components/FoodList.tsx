import Recipe from '../types/IRecipe';
import FoodItem from './FoodItem';

interface FoodListProps {
	foodData: Recipe[];
	onRecipeSelect: (id: number) => void;
}

const FoodList: React.FC<FoodListProps> = ({ foodData, onRecipeSelect }) => {
	return (
		<div>
			{foodData.map((recipe) => (
				<FoodItem
					key={recipe.id}
					recipe={recipe}
					onRecipeSelect={onRecipeSelect}
				/>
			))}
		</div>
	);
};
export default FoodList;
