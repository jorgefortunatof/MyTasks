import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { getTasksFromStorage, storeTasks } from "../storage/tasksStorage";
import TaskType from "../types/TaskType";

type TasksContextData = {
	tasks: TaskType[];
	// taskSelectedToEdit: TaskType;

	addTask: (task: TaskType) => void;
	removeTask: (task: TaskType) => void;
	updateTask: (task: TaskType) => void;
};

const TaskContext = createContext<TasksContextData>({} as TasksContextData);

export const TasksProvider: React.FC = ({ children }) => {
	// const [taskToEdit, setTaskToEdit] = useState<TaskType>({} as TaskType);
	const [tasks, setTasks] = useState<TaskType[]>([]);

	useEffect(() => {
		async function getTasks() {
			const tasks = await getTasksFromStorage();
			setTasks(tasks);
		}
		getTasks();
	}, []);

	const updateTask = useCallback(
		(task: TaskType) => {
			const taskIndex = tasks.findIndex((itemTask) => itemTask.id === task.id);

			if (taskIndex < 0) return;

			let newTasks = [...tasks];
			newTasks[taskIndex] = task;

			setTasks(newTasks);
			storeTasks(newTasks);
		},
		[tasks, setTasks]
	);

	const addTask = useCallback(
		(task: TaskType) => {
			const newTasks = [...tasks, task];
			setTasks(newTasks);
			storeTasks(newTasks);
		},
		[tasks, setTasks]
	);

	const removeTask = useCallback(
		(task: TaskType) => {
			const newTasks = tasks.filter((itemTask) => itemTask.id !== task.id);

			setTasks(newTasks);
			storeTasks(newTasks);
		},
		[tasks, setTasks]
	);

	return (
		<TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
			{children}
		</TaskContext.Provider>
	);
};

export function useTasks() {
	const context = useContext(TaskContext);

	if (!context) {
		throw new Error("useTasks deve ser usado com um provider!");
	}

	return context;
}
