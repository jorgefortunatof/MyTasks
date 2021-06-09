import AsyncStorage from "@react-native-async-storage/async-storage";
import TaskType from "../types/TaskType";

export async function getTasksFromStorage() {
	const stringTasks = await AsyncStorage.getItem("@MyTasks/tasks");
	if (!stringTasks) return [];

	const tasks = JSON.parse(stringTasks);

	return tasks;
}

export function storeTasks(tasks: TaskType[]) {
	const stringTasks = JSON.stringify(tasks);

	AsyncStorage.setItem("@MyTasks/tasks", stringTasks);
}
