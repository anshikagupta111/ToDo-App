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

export interface TaskListProps {
  tasks: Task[];
  onToggle: (taskId: string | number) => void;
  onEdit: (taskId: string | number) => void;
  onDelete: (taskId: string | number) => void;
}
