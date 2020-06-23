import React from 'react';
import { v4 as uuid } from 'uuid';

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
        {Object.keys(navLinks).map((route) => (
          <Item key={uuid()} button classes={{ root: 'root' }}>
            <StyledLink exact to={route}>
              {navLinks[route].title}
            </StyledLink>
          </Item>
        ))}
      </ListContainer>
    </LinkContainer>
    </SidebarContainer>
  </Hidden>
)

export default DesktopNav;
