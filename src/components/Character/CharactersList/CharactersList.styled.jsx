import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  width: 312px;
  height: 100%;
  padding-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.black};
  text-decoration: none;
  box-shadow: ${p => p.theme.shadows.main};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  transition: transform 300ms linear;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
  :hover {
    transform: scale(1.05);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  max-width: 1020px;
  list-style: none;
`;
