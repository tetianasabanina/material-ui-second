import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    page: {
      flexGrow: 1,
      margin: "20px",
      padding: "20px 0 20px 0",
      height: "100vh",
      color: "#305792",
    },
    paragraph: {
      marginTop: "30px"
    }
    
  });
const Contact =() => {
    const classes = useStyles();
    return (
        <div className={classes.page} >
            <Typography variant="h2">This is CONTACT page</Typography>
            <Typography variant="subtitle2" className={classes.paragraph}>
            Morbi justo augue, tincidunt et leo eu, dapibus sollicitudin dolor. 
            In tempor malesuada turpis, a volutpat elit auctor eget. 
            Morbi sed nisl erat. Orci varius natoque penatibus et magnis 
            dis parturient montes, nascetur ridiculus mus. 
            Morbi laoreet est nulla, non scelerisque risus rhoncus quis. 
            Ut imperdiet at nunc vel ullamcorper. In at vehicula lorem.
            </Typography>
        </div>
    );
}

export default Contact;