import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/ToolBar';

import MainNavigation from "./MainNavigation";
import Posts from "./Posts";
import { makeStyles } from '@material-ui/styles';
import Footer from "./Footer";
import { typography } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding:20,
    color: "#EBCF12",
    background: "linear-gradient(to right top, #305792, #9c5ba4, #ef5e86, #ff8b4c, #ebcf12);w",
  },
  title: {
    flexGrow: 1,
  },
  list: {
    background: "green",
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.root}>
        <ToolBar>
          <Typography variant="h5" className={classes.title}>
            MaterialUI example
          </Typography>
          <MainNavigation />
        </ToolBar>
      </AppBar>
      <Posts/>
      <Footer />
      <Typography align="center">Tanja's Studio &copy; 2019</Typography>
    </div>
  );
}

export default App;
