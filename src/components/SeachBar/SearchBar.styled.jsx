import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const SearchContainer = styled.div`
  position: relative;
  height: 56px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 46px;
  }
  @media screen and (min-width: 1068px) {
    margin-bottom: 60px;
  }
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  padding: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[7]}px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: ${p => p.theme.radii.large};
`;

export const Icon = styled.img`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 24px;
  height: 24px;
`;
