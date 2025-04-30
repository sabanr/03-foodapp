import IRecipeInformation from '../types/IRecipeInformation';
import Ingredient from './Ingredient';

interface IIngredientsListProps {
	isLoading: boolean;
	recipeInformation: IRecipeInformation;
}

const IngredientsList: React.FC<IIngredientsListProps> = ({
	isLoading,
	recipeInformation,
}) => {
	return (
		<div>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					{recipeInformation.extendedIngredients.map((ingredient) => (
						<div key={ingredient.id}>
							<Ingredient ingredient={ingredient} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};
export default IngredientsList;
