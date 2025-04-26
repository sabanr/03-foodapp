import Recipe from '../types/Recipe';

interface FoodListProps {
	recipe: Recipe;
}

const FoodItem: React.FC<FoodListProps> = ({ recipe }) => {
	return (
		<div>
			<img src={recipe.image} alt={recipe.title} />
			<h1>{recipe.title}</h1>
			<button type="button">View Recipe</button>
		</div>
	);
};
export default FoodItem;
