import { useEffect, useState } from 'react';
import IRecipeInformation from '../types/IRecipeInformation.ts';

interface IRecipeDetailsProps {
	recipeId: number;
}

const RecipeDetails: React.FC<IRecipeDetailsProps> = ({ recipeId }) => {
	const [recipeInformation, setRecipeInformation] =
		useState<IRecipeInformation | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchRecipeDetails = async () => {
			try {
				setIsLoading(true);
				const recipeDetailsResponse = await fetch(
					`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${import.meta.env.VITE_API_KEY}`,
				);
				const recipeDetails =
					(await recipeDetailsResponse.json()) as IRecipeInformation;

				setRecipeInformation(recipeDetails);
				console.log('Fetched recipe details:', recipeDetails);
			} catch (error) {
				console.error('Error fetching recipe details:', error);
			} finally {
				setIsLoading(false);
			}
		};

		if (recipeId === 0) {
			return;
		}

		fetchRecipeDetails();
	}, [recipeId]);

	return (
		<div>
			{recipeInformation && (
				<div>
					<div>
						<h2>{recipeInformation.title}</h2>
						<img
							src={recipeInformation.image}
							alt={recipeInformation.title}
						/>
						<div>
							<span>
								${' '}
								{(recipeInformation.pricePerServing ?? 0.0) /
									100}{' '}
								Per serving
							</span>
						</div>
						<div>
							<h2>Instructions:</h2>
							{isLoading ? (
								<p>Loading...</p>
							) : (
								recipeInformation.analyzedInstructions[0].steps.map(
									(s) => <li>{s.step}</li>,
								)
							)}
						</div>
					</div>
					<span>
						🧑🏻‍🦰
						<strong>
							{recipeInformation.readyInMinutes} Minutes
						</strong>
					</span>
					<span>
						<strong>
							Serves {recipeInformation.servings} Servings
						</strong>
					</span>
					<span>
						{recipeInformation.vegetarian
							? '🥕 Vegetarian'
							: '🍖 Non-Vegetarian'}
					</span>
					<span>{recipeInformation.vegan ? 'Vegan' : ''}</span>
				</div>
			)}
		</div>
	);
};
export default RecipeDetails;
