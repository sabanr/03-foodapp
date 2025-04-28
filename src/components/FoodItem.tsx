import Recipe from '../types/Recipe';

import styles from './FoodItem.module.css';

interface FoodListProps {
	recipe: Recipe;
}

const FoodItem: React.FC<FoodListProps> = ({ recipe }) => {
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
				<button className={styles.itemButton} type="button">
					View Recipe
				</button>
			</div>
		</div>
	);
};
export default FoodItem;
