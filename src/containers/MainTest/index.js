import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import beautyNativeLogo from '../../images/bn.svg';
import {
  LinkContainer,
  MobileDrawer,
  MobileLinkContainer,
  MobileListContainer,
  SidebarContainer,
  StyledLink,
  Title,
} from '../../components/NavBar/styledComponents';
import { Body } from '../Main/styledComponents';
import { navLinks, pageHeaders } from '../../components/NavBar/helpers';
import Routes from '../Main/routes';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

function ResponsiveDrawer() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const location = window.location.pathname;
  return (
    <Body>
        <Hidden smUp implementation="css">
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
            ModalProps={{
              keepMounted: true,
            }}
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
        <Hidden xsDown>
          <SidebarContainer
            anchor='left'
            classes={{ root: 'root', paper: 'paper' }}
            variant="permanent"
            open
          >
          <LinkContainer>
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
            </LinkContainer> 
            </SidebarContainer>
        </Hidden>
      <main>
      <Hidden smUp implementation="css">
        <div className={classes.toolbar} />
      </Hidden>
        <Routes />
      </main>
    </Body>
  );
}

export default ResponsiveDrawer;
