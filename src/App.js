import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/ToolBar';

import MainNavigation from "./MainNavigation";
import Posts from "./Posts";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding:25,
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
    </div>
  );
}

export default App;
