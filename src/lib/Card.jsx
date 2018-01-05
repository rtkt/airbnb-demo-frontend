import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const FlexLine = styled.span`
  align-items: baseline;
  display: flex;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Price = styled.span`
  font-weight: bold;
  &::before {
    content: '$';
  }
`;

export const Reviews = FlexLine.extend`
  font-size: 12px;
`;

export const Rating = styled.span`
  margin-left: 8px;
`;

export const Star = styled.img`
  margin-right: 4px;
`;

export const VerticalContainer = Container.extend`
  align-items: flex-start;
  flex-direction: column;
`;
