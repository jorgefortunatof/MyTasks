import Cb from 'expo-checkbox';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
	position: relative;

	margin-top: 20px;
	padding: 30px;
	border-radius: 12px;

	background-color: ${colors.white};
`;

export const Title = styled.Text`
	font-size: 20px;
	font-weight: bold;
`;

export const Description = styled.Text``;


export const CheckBox = styled(Cb)`
	width: 20px;
	height: 20px;

	position: absolute;
	right: 20px;
	bottom: 20px;

	color: white;
`;
