// Plant Image interface ,
export interface PlantImage {
  id: number;
  url: string;
}

// Plant Category interface ,
export interface PlantCategory {
  id: number;
  name: string;
  title: string;
  rank: number;
  image: PlantImage;
}

// API Response interface,
export interface PlantCategoriesResponse {
  data: PlantCategory[];
}