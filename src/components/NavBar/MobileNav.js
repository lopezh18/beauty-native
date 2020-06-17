import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { navLinks, pageHeaders } from './helpers';
import {
  MobileDrawer,
  MobileLinkContainer,
  MobileListContainer,
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
  console.log(window.location.pathname);

  return (
    <Hidden smUp>
      <AppBar position="fixed">
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
            {pageHeaders[location]}
          </Title>
        </Toolbar>
      </AppBar>
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
              {navLinks.map((navLinks, idx) => (
                <ListItem key={idx} button classes={{ root: 'root' }}>
                  <StyledLink exact to={navLinks.href}>
                    {navLinks.title}
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
