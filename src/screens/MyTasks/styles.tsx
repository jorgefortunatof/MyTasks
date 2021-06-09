import styled from "styled-components/native";
import colors from "../../styles/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FlatList } from "react-native";
import { shade } from "polished";

export const Container = styled.View`
	flex: 1;
	width: 100%;
	max-width: 700px;

	padding: 40px 20px;
`;

export const Title = styled.Text`
	font-size: 30px;
	font-weight: bold;
	color: ${colors.white};
`;

export const FloatButton = styled.TouchableOpacity`
	position: fixed;
	bottom: 40px;
	right: 40px;

	padding: 10px;

	border-radius: 30px;
	background-color: ${colors.black};
`;

export const PlusIcon = styled(MaterialCommunityIcons).attrs(() => ({
	name: "plus",
}))`
	font-size: 40px;

	color: ${colors.white};
`;

export const TaskList = styled(FlatList as new () => FlatList)``;

export const FilterAndCounterContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;

	justify-content: space-between;
	align-items: center;
`;

export const NoTasksContainer = styled.View`
	margin: 30px;

	flex: 1;
	justify-content: center;
	align-items: center;

	border-radius: 12px;
`;

export const NoTasksTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	text-align: center;

	padding: 40px;
	color: ${colors.black};
`;

export const NoTasksIcon = styled(MaterialCommunityIcons).attrs(() => ({
	name: "emoticon-sad-outline",
}))`
	font-size: 180px;
	color: ${colors.black};
`;
