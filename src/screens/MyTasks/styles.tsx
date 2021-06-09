import styled from "styled-components/native";
import colors from "../../styles/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FlatList } from "react-native";

export const Container = styled.View`
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
