import Recipe from '../types/Recipe';
import FoodItem from './FoodItem';

interface FoodListProps {
	foodData: Recipe[];
}

const FoodList: React.FC<FoodListProps> = ({ foodData }) => {
	return (
		<div>
			{foodData.map((recipe) => (
				<FoodItem key={recipe.id} recipe={recipe} />
			))}
		</div>
	);
};
export default FoodList;
