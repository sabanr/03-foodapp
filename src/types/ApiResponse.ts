import Recipe from './Recipe';

interface ApiResponse {
    results: Recipe[];
    offset: number;
    number: number;
    totalResults: number;
}
export default ApiResponse;