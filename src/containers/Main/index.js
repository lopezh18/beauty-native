import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import DesktopNav from '../../components/NavBar/DesktopNav';
import MobileNav from '../../components/NavBar/MobileNav';
import ConditionalRender from '../../components/ConditionalRender/index';
import Footer from '../../components/Footer';
import { Body, MainContainer } from './styledComponents';
import Routes from './routes';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

function ToolbarPlaceholder() {
  const classes = useStyles();
  return (
    <Hidden smUp>
      <div className={classes.toolbar} />
    </Hidden>
  );
}

const Main = () => {
  const isHomepage = window.location.pathname !== '/';
  return (
    <Body>
      <ConditionalRender
        Component={DesktopNav}
        shouldRender={isHomepage}
      />
      <ConditionalRender
        Component={MobileNav}
        shouldRender={isHomepage}
      />
      <MainContainer>
        <ConditionalRender
          Component={ToolbarPlaceholder}
          shouldRender={isHomepage}
        />
        <Routes />
        <Footer />
      </MainContainer>
    </Body>
  );
}

export default Main;
