export interface Author {
  name: string;
  url?: string;
  institution?: string | string[]; 
  notes?: string[];
}

export type Link = {
  url: string;
  name: string;
  icon?: string;
};

export type Note = {
  symbol: string;
  text: string;
};
