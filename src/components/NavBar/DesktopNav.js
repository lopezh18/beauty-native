import React from 'react';
import { Hidden } from '@material-ui/core';
import {
  Item,
  LinkContainer,
  ListContainer,
  SidebarContainer,
  StyledLink,
} from './styledComponents';
import { navLinks } from './helpers';
import beautyNativeLogo from '../../images/bn.svg';

const DesktopNav = () => (
  <Hidden xsDown>
    <SidebarContainer
      anchor="left"
      classes={{ root: 'root', paper: 'paper' }}
      variant="permanent"
      open
    >
    <LinkContainer>
      <img alt="beauty-native" src={beautyNativeLogo}/>
      <ListContainer classes={{ padding: 'padding'}} dense>
        {navLinks.map((navLinks, idx) => (
          <Item key={idx} button classes={{ root: 'root' }}>
            <StyledLink exact to={navLinks.href}>
              {navLinks.title}
            </StyledLink>
          </Item>
        ))}
      </ListContainer>
    </LinkContainer>
    </SidebarContainer>
  </Hidden>
)

export default DesktopNav;
