export interface Category {
  id: string | number;
  name: string;
  color?: string;
}

export interface Task {
  id: string | number;
  text: string;
  color?: string;
  checked?: boolean;
}

export interface TaskInputModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  value: string;
  onChangeText: (text: string) => void;
  categories: Category[];
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category) => void;
  isEditing?: boolean;
}
