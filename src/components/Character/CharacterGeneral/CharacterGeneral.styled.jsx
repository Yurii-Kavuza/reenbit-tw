import styled from 'styled-components';

export const ImageContainer = styled.div`
  height: 232px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    height: 200px;
  }
  @media screen and (min-width: 1068px) {
    height: 168px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Name = styled.h2`
  padding: 0 12px;
  font-weight: 500;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.87);
  flex-grow: 1;
`;

export const Creature = styled.p`
  padding: 0 12px;
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;
