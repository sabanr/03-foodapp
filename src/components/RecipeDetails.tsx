interface IRecipeDetailsProps {
	recipeId: number;
}

const RecipeDetails: React.FC<IRecipeDetailsProps> = ({ recipeId }) => {
	return <div>Recipe {recipeId} Details</div>;
};
export default RecipeDetails;
