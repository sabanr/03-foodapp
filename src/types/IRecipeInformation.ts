export default interface IRecipeInformation {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  license?: string;
  sourceName?: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  aggregateLikes: number;
  healthScore: number;
  spoonacularScore?: number;
  pricePerServing: number;
  analyzedInstructions: IAnalyzedInstruction[];
  extendedIngredients: IExtendedIngredient[];
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  winePairing: IWinePairing;
  instructions?: string;
  originalId?: string | null;
}

export interface IExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: IMeasures;
}

export interface IMeasures {
  us: IMeasureUnit;
  metric: IMeasureUnit;
}

export interface IMeasureUnit {
  amount: number;
  unitShort: string;
  unitLong: string;
}

export interface IAnalyzedInstruction {
  name: string;
  steps: IInstructionStep[];
}

export interface IInstructionStep {
  number: number;
  step: string;
  ingredients: IIngredientReference[];
  equipment: IEquipmentReference[];
}

export interface IIngredientReference {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface IEquipmentReference {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface IWinePairing {
  pairedWines: string[];
  pairingText: string;
  productMatches: IProductMatch[];
}

export interface IProductMatch {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  averageRating: number;
  ratingCount: number;
  score: number;
  link: string;
}
