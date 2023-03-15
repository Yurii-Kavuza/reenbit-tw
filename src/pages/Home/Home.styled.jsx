import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 92px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  @media screen and (min-width: 768px) {
    padding-top: 86px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1068px;
  }
`;

export const PictureContainer = styled.div`
  margin: 0 auto;
  margin-bottom: ${p => p.theme.space[6]}px;
  width: 312px;
  @media screen and (min-width: 768px) {
    width: 600px;
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
