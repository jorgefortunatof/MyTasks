import styled from "styled-components/native";
import { Platform } from "react-native";
import WebModal from "modal-enhanced-react-native-web";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { transparentize } from "polished";
import colors from "../../styles/colors";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;

	background-color: ${transparentize(0.5, colors.black)};
`;

export const Content = styled.View`
	position: relative;

	max-width: 700px;
	width: 80%;

	@media (min-width: 700px) {
		width: 70%;
	}

	margin: 40px;
	padding: 60px 20px 40px 20px;

	border-radius: 10px;
	background-color: ${colors.white};
`;

export const CloseIconContainer = styled.TouchableOpacity`
	position: absolute;
	top: 20px;
	left: 20px;
`;

export const CloseIcon = styled(MaterialCommunityIcons).attrs(() => ({
	name: "close",
}))`
	font-size: 20px;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;

	margin-bottom: 16px;
`;

export const Input = styled.TextInput`
	font-size: 16px;
	height: 20px;

	padding: 20px 10px;
	margin-bottom: 16px;

	border-radius: 6px;
	background-color: ${colors.gray};
`;

export const Button = styled.Button.attrs(() => ({
	color: colors.primary,
}))`
	border-radius: 2px;
	padding: 4px;
`;

export let Modal = styled.Modal`
	flex: 1;
`;

if (Platform.OS === "web") {
	Modal = styled(WebModal)`
		flex: 1;
		margin: 0;
	`;
}
