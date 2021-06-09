import styled from "styled-components/native";
import colors from "../../styles/colors";
import Cb from "expo-checkbox";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const Container = styled.View`
	position: relative;

	min-height: 100px;
	margin-bottom: 20px;
	padding: 35px;
	border-radius: 12px;

	background-color: ${colors.white};
`;

export const Title = styled.Text`
	font-size: 20px;
	font-weight: bold;
`;

export const Description = styled.Text`
	font-size: 14px;
`;

export const CheckBox = styled(Cb)`
	width: 20px;
	height: 20px;

	position: absolute;
	right: 20px;
	bottom: 20px;

	color: white;
`;

export const EditIconContainer = styled.TouchableOpacity`
	position: absolute;
	top: 20px;
	right: 45px;
`;

export const EditIcon = styled(MaterialCommunityIcons).attrs(() => ({
	name: "pencil",
}))`
	font-size: 16px;
`;

export const RemoveIconContainer = styled.TouchableOpacity`
	position: absolute;
	top: 20px;
	right: 20px;
`;

export const RemoveIcon = styled(MaterialCommunityIcons).attrs(() => ({
	name: "delete",
}))`
	font-size: 16px;
`;
