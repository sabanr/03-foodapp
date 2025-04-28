import Recipe from './Recipe';

interface IApiResponse {
    results: Recipe[];
    offset: number;
    number: number;
    totalResults: number;
}
export default IApiResponse;