import { useEffect, useState } from 'react';
import ApiResponse from '../types/ApiResponse';
import Recipe from '../types/Recipe';

const API_URL: string = 'https://api.spoonacular.com/recipes/complexSearch';

interface SearchProps {
	foodData: Recipe[];
	setFoodData: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

const Search: React.FC<SearchProps> = ({ setFoodData }) => {
	const [query, setQuery] = useState<string>('pizza');
	// syntax for the useEffect hook
	useEffect(() => {}, []);
	useEffect(() => {
		const fetchFood = async () => {
			await fetch(
				`${API_URL}?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`,
			).then(async (response) => {
				const data = (await response.json()) as ApiResponse;
				setFoodData(data.results);
			});
		};
		fetchFood();
	}, [query, setFoodData]);

	return (
		<div>
			<input
				type="text"
				title="Search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</div>
	);
};
export default Search;
