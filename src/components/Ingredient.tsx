import { IExtendedIngredient } from '../types/IRecipeInformation';

import styles from '../styles/Ingredient.module.css';

interface IIngredientProps {
	ingredient: IExtendedIngredient;
}

const Ingredient: React.FC<IIngredientProps> = ({ ingredient }) => {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.imageContainer}>
					<img
						className={styles.image}
						src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
						alt={ingredient.nameClean}
					/>
				</div>
				<div className={styles.nameContainer}>
					<div className={styles.name}>{ingredient.name}</div>
					<div className={styles.amount}>
						{ingredient.amount} {ingredient.unit}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Ingredient;
