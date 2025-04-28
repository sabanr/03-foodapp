import Recipe from '../types/IRecipe';

import styles from './FoodItem.module.css';

interface FoodListProps {
	recipe: Recipe;
	onRecipeSelect: (id: number) => void;
}

const FoodItem: React.FC<FoodListProps> = ({ recipe, onRecipeSelect }) => {
	return (
		<div className={styles.itemContainer}>
			<img
				className={styles.itemImage}
				src={recipe.image}
				alt={recipe.title}
			/>
			<div className={styles.itemContent}>
				<p className={styles.itemName}>{recipe.title}</p>
			</div>
			<div className={styles.buttonContainer}>
				<button
					onClick={() => onRecipeSelect(recipe.id)}
					className={styles.itemButton}
					type="button">
					View Recipe
				</button>
			</div>
		</div>
	);
};
export default FoodItem;
