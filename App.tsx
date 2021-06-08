import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container } from './src/styles/global';

import MyTasks from './src/screens/MyTasks';

export default function App() {
	return (
		<Container >
			<MyTasks />
			<StatusBar style="auto" />
		</Container>
	);
}
