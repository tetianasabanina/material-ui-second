import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    page: {
      flexGrow: 1,
      margin: "10px",
      padding: "20px 0 20px 0",
      height: "100vh",
      color: "#305792",
    },
    
  });
const Contact =() => {
    const classes = useStyles();
    return (
        <div className={classes.page} >
            <Typography variant="h2">This is CONTACT page</Typography>
        </div>
    );
}

export default Contact;