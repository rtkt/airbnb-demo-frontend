import styled from 'styled-components';

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Button = styled.button`
  background: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  height: 64px;
  text-align: center;
  vertical-align: middle;
  width: 110px;
`;

export const Apply = Button.extend`
  color: #0f7276;
`;

export const Cancel = Button.extend`
  color: #636363;
`;
