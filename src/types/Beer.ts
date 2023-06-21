export interface Beer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  description: string;
  abv: number;
  ibu: number;
  ingredients: {
    malt: { name: string }[];
    hops: { name: string }[];
  };
}
