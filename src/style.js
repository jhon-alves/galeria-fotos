import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  background: #f1f1f1;
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 70px;
  background-color: #1a1a1a;
  align-items: center;
  justify-content: center;
`;

export const TitleHeader = styled.Text`
  color: #ccc;
  font-size: 27px;
  font-weight: 700;
`;

export const Photo = styled.View`
  width: 100%;
`;

export const Cards = styled.Image`
  width: 100%;
  height: 250px;
`;

export const ButtonPrev = styled.TouchableOpacity`
  width: 90%;
  padding: 15px 0;
  background-color: #1a1a1a;
  border-radius: 5px;
  margin-top: 15px;
`;

export const ButtonNext = styled.TouchableOpacity`
  width: 90%;
  padding: 15px 0;
  background-color: #1a1a1a;
  border-radius: 5px;
  margin-top: 15px;
`;

export const Description = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #ccc;
`;