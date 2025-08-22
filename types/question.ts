// Question interface 
export interface Question {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

// API Response interface
export type QuestionsResponse = Question[];
