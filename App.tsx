import React from "react";
import { StatusBar } from "expo-status-bar";
import { Container } from "./src/styles/global";

import MyTasks from "./src/screens/MyTasks";
import { TasksProvider } from "./src/hooks/tasks";

export default function App() {
	return (
		<TasksProvider>
			<Container>
				<MyTasks />
				<StatusBar style="auto" />
			</Container>
		</TasksProvider>
	);
}
