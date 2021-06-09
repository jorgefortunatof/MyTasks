import React, { useEffect, useState } from "react";
import { useTasks } from "../../hooks/tasks";

import { Picker } from "./styles";

const TaskFilter: React.FC = () => {
	const { filterTasks, removeFilter } = useTasks();

	const [selectedValue, setSelectedValue] = useState("");

	useEffect(() => {
		switch (selectedValue) {
			case "0":
				removeFilter();
				break;
			case "1":
				filterTasks({ completed: true });
				break;
			case "2":
				filterTasks({ completed: false });
				break;
		}
	}, [selectedValue]);

	return (
		<Picker
			selectedValue={selectedValue}
			onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
		>
			<Picker.Item value="0" label="Todas" />
			<Picker.Item value="1" label="Executadas" />
			<Picker.Item value="2" label="Não Executadas" />
		</Picker>
	);
};

export default TaskFilter;
