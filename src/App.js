import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/ToolBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import MainNavigation from "./MainNavigation";
import Posts from "./Posts";
import { makeStyles } from '@material-ui/styles';
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "static",
    color: "#EBCF12",
    background: "linear-gradient(to right top, #305792, #9c5ba4, #ef5e86, #ff8b4c, #ebcf12);w",
  },
  title: {
    flexGrow: 1,
  },
  
  listitem: {
    display: "inline-block",
    width: 150,
    textAlign: "right",
    color: "#305792",
   },

   
});



const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <AppBar className={classes.root}>
          <ToolBar>
            <Typography variant="h5" className={classes.title}>
              MaterialUI example
          </Typography>
            <MainNavigation />
          </ToolBar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </Router>
      <Footer />
      <Typography align="center">Tanja's Studio &copy; 2019</Typography>
    </div>
  );
}

export default App;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);