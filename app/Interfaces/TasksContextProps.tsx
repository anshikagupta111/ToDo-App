export interface Category {
  id: string | number;
  name: string;
  color: string;
}

export interface Task {
  id: string | number;
  text: string;
  checked: boolean;
  color: string;
  categoryId: string | number;
}

export interface TasksContextProps {
  tasks: Task[];
  newTask: string;
  setNewTask: (text: string) => void;
  categories: Category[];
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
  isEditing: boolean;
  searchQuery: string;
  setModalVisible: (visible: boolean) => void;
  addTask: (text: string) => void;
  deleteTask: (id: string | number) => void;
  toggleTask: (id: string | number) => void;
  editTask: (id: string | number) => void;
  modalVisible: boolean;
  searchTask: (query: string) => void;
}
