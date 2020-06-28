import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import test1 from '../../images/test1.jpg';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';

export const MobileDrawer = styled(Drawer)`
  .paper {
    width: 10rem;
  }
`;

export const SidebarContainer = styled(Drawer)`
  &.root {
    width: 9.5rem;
  }
  .paper {
    background-color: transparent;
    border: transparent;
  }
`;

export const Title = styled.div`
  font-family: canterburyregular, serif;
  font-size: 2.5rem;
  font-weight: normal;
  text-align: center;
  width: 100%;
`;

export const LinkContainer = styled.div`
  img {
    width: 9.5rem;
  }
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: canterburyregular, serif;
  font-size: 1.7rem;
`;

export const ListContainer = styled(List)`
  height: 100%;
`;

export const Item = styled(ListItem) `
  &.root {
    margin-top: 2rem;
  }
`;
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;

export const MobileLinkContainer = styled.div`
  img {
    width: 7rem;
  }
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: canterburyregular, serif;
  font-size: 1.4rem;
`;

export const MobileListContainer = styled(List)`
  height: 100%;
  padding-top: 0;
`;

export const StyledAppBar = styled(AppBar)`
  &.root {
    color: white;
  }
`;
  