import React from 'react';
import { v4 as uuid } from 'uuid';

import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { navLinks } from './helpers';
import {
  MobileDrawer,
  MobileLinkContainer,
  MobileListContainer,
  StyledAppBar,
  StyledLink,
  Title,
} from './styledComponents';
import beautyNativeLogo from '../../images/bn.svg';

function MobileNav(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }; 
  const location = window.location.pathname;
  const { header } = navLinks[location];
  const { title } = navLinks[location];
  const mobileHeader = header || title;
  return (
    <Hidden smUp>
      <StyledAppBar
        classes={{ root: 'root' }}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Title>
            {mobileHeader}
          </Title>
        </Toolbar>
      </StyledAppBar>
      <MobileDrawer
        anchor='left'
        classes={{ paper: 'paper' }}
        ModalProps={{ keepMounted: true }}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
      >
        <MobileLinkContainer>
          <img alt="beauty-native" src={beautyNativeLogo}/>
            <MobileListContainer classes={{ padding: 'padding'}} dense>
              {Object.keys(navLinks).map((route) => (
                <ListItem key={uuid()} button classes={{ root: 'root' }}>
                  <StyledLink exact to={route}>
                    {navLinks[route].title}
                  </StyledLink>
                </ListItem>
              ))}
            </MobileListContainer>
        </MobileLinkContainer>
      </MobileDrawer>
    </Hidden>
  );
}

export default MobileNav;
