import { useEffect, useState } from 'react';
import IRecipeInformation from '../types/IRecipeInformation.ts';

interface IRecipeDetailsProps {
	recipeId: number;
}

const RecipeDetails: React.FC<IRecipeDetailsProps> = ({ recipeId }) => {
	const [recipeInformation, setRecipeInformation] =
		useState<IRecipeInformation | null>(null);

	useEffect(() => {
		const fetchRecipeDetails = async () => {
			try {
				const recipeDetailsResponse = await fetch(
					`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${import.meta.env.VITE_API_KEY}`,
				);
				const recipeDetails =
					(await recipeDetailsResponse.json()) as IRecipeInformation;

				setRecipeInformation(recipeDetails);
				console.log('Fetched recipe details:', recipeDetails);
			} catch (error) {
				console.error('Error fetching recipe details:', error);
			}
		};

		if (recipeId === 0) {
			return;
		}

		fetchRecipeDetails();
	}, [recipeId]);

	return (
		<div>
			<h2>Recipe {recipeId} Details</h2>
			<div
				dangerouslySetInnerHTML={{
					__html: recipeInformation?.instructions || '',
				}}></div>
		</div>
	);
};
export default RecipeDetails;
