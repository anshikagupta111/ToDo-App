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

export interface HomeScreenModalProps {
  visible: boolean;
  onClose: () => void;
  selectedCategory: Category;
  tasks: Task[];
  onToggle: (taskId: string | number) => void;
}
