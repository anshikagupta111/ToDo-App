import { createContext,useContext } from "react";
import { useTasks } from "../hooks";
import { TasksContextProps } from "../Interfaces/TasksContextProps";
const TasksContext=createContext<TasksContextProps | null>(null)
export const TasksProvider:React.FC<{children:React.ReactNode}>=({children})=>{
    const tasksState=useTasks()
    return(
        <TasksContext.Provider value={tasksState}>
            {children}
        </TasksContext.Provider>
    )
}
export const useTasksContext = (): TasksContextProps => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }
  return context;
};