import { useEffect, useState } from 'react';
import ApiResponse from '../types/IApiResponse';
import Recipe from '../types/IRecipe';

import styles from '../styles/Search.module.css';

const API_URL: string = 'https://api.spoonacular.com/recipes/complexSearch';

interface SearchProps {
	foodData: Recipe[];
	setFoodData: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

const Search: React.FC<SearchProps> = ({ setFoodData }) => {
	const [query, setQuery] = useState<string>('pizza');
	const [debouncedQuery, setDebouncedQuery] = useState<string>(query);

	// Debounce the query input
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(query);
		}, 600); // 600ms debounce delay

		return () => {
			clearTimeout(handler); // Clear timeout on cleanup
		};
	}, [query]);

	// Fetch data when debouncedQuery changes
	useEffect(() => {
		const fetchFood = async () => {
			try {
				const response = await fetch(
					`${API_URL}?query=${debouncedQuery}&apiKey=${import.meta.env.VITE_API_KEY}`,
				);

				const data = (await response.json()) as ApiResponse;
				setFoodData(data.results);
			} catch (error) {
				console.error('Error fetching food data:', error);
			}
		};
		if (debouncedQuery) {
			fetchFood();
		}
	}, [debouncedQuery, setFoodData]);

	return (
		<div className={styles.searchContainer}>
			<input
				className={styles.input}
				type="text"
				title="Search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</div>
	);
};
export default Search;
