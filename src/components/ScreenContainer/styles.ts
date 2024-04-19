import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.COLORS.GRAY_800};
  padding: 68px 18px 10px 18px;
`