import {ThreeCircles} from "react-loader-spinner";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const LoaderComponent = () => {
  return (
    <LoaderContainer>
      <ThreeCircles color="#ed7811" height="50" width="50" />
    </LoaderContainer>
  );
};
export default LoaderComponent;
