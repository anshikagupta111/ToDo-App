export interface Category {
  id: string;
  name: string;
  color?: string;
}

export interface HomeScreenListProps {
  categories: Category[];
  onListPress: (category: Category) => void;
}