import { useEffect, useState } from 'react';
import IRecipeInformation from '../types/IRecipeInformation.ts';

import styles from '../styles/RecipeDetails.module.css';

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
					<div className={styles.recipeCard}>
						<h2 className={styles.recipeName}>
							{recipeInformation.title}
						</h2>
						<img
							className={styles.recipeImage}
							src={recipeInformation.image}
							alt={recipeInformation.title}
						/>
						<div className={styles.recipeDetails}>
							<span>
								$
								{(
									(recipeInformation.pricePerServing ?? 0.0) /
									100
								).toFixed(2)}{' '}
								Per serving
							</span>
							<span>
								🧑🏻‍🦰
								<strong>
									{recipeInformation.readyInMinutes} Min
								</strong>
							</span>
							<span>
								<strong>
									{recipeInformation.servings} Servings
								</strong>
							</span>
							<span>
								<strong>
									{recipeInformation.vegetarian
										? '🥕 Vegetarian'
										: '🍖 Non-Vegetarian'}
								</strong>
							</span>
							<span>
								<strong>
									{recipeInformation.vegan ? 'Vegan' : ''}
								</strong>
							</span>
						</div>
						<h2>Instructions:</h2>
						<div className={styles.recipeInstructions}>
							{isLoading ? (
								<p>Loading...</p>
							) : (
								<ol>
									{recipeInformation.analyzedInstructions[0].steps.map(
										(s) => (
											<li key={s.number}>{s.step}</li>
										),
									)}
								</ol>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default RecipeDetails;
