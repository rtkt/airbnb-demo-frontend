import styled from 'styled-components';
import breakpoints from '../UI/globals';

export const Button = styled.button`
  background-color: white;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  margin: 12px;
  margin-left: 0;
  padding: 7px 16px;
`;

export const HideableButton = Button.extend`
  display: none;

  @media (min-width: ${breakpoints.lg}) {
    display: inline-block;
  }
`;
