import { IExtendedIngredient } from '../types/IRecipeInformation';

interface IIngredientProps {
	ingredient: IExtendedIngredient;
}

const Ingredient: React.FC<IIngredientProps> = ({ ingredient }) => {
	return (
		<div>
			<img
				src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
				alt={ingredient.nameClean}
			/>
			<h3>{ingredient.name}</h3>
			<h3>
				{ingredient.amount}
				{ingredient.unit}
			</h3>
		</div>
	);
};
export default Ingredient;
