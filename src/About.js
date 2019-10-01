import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    page: {
      flexGrow: 1,
      margin: "10px",
      padding: "20px 0 20px 0",
      height: "100vh",
      color: "#ef5e86",
      
    },
    
  });

const About =() => {
    const classes = useStyles();
    return (
        <div className={classes.page}>
            <Typography variant="h2">This is ABOUT page</Typography>
        </div>
    );
}

export default About;