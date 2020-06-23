import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { DesktopNav, MobileNav } from '../../components/NavBar/index';
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
};

const Main = () => {
  const isHomepage = window.location.pathname === '/';
  return (
    <Body>
      <ConditionalRender
        Component={DesktopNav}
        shouldRender={!isHomepage}
      />
      <ConditionalRender
        Component={MobileNav}
        shouldRender={!isHomepage}
      />
      <MainContainer removePadding={isHomepage}>
        <ConditionalRender
          Component={ToolbarPlaceholder}
          shouldRender={!isHomepage}
        />
        <Routes />
        <ConditionalRender
          Component={Footer}
          shouldRender={!isHomepage}
        />
      </MainContainer>
    </Body>
  );
}

export default Main;
