import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const RouteChangeLink = styled(Link)`
  text-decoration: none;
  margin: 15px;
  color: #606060;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
    color: black;
  }
  
`;
