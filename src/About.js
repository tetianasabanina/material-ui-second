import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    page: {
      flexGrow: 1,
      margin: "20px",
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
            <Typography variant="overline" >
            In mattis, mauris eget ultricies ultricies, leo dolor molestie turpis, 
            vel aliquet velit tortor eget nisl. Suspendisse ac orci pulvinar, 
            egestas lectus facilisis, feugiat metus. Aliquam euismod risus id 
            libero imperdiet consectetur. Donec massa lorem, viverra at viverra 
            sit amet, auctor at erat. Suspendisse lacinia dolor id eros laoreet 
            porttitor. Donec et augue sit amet metus posuere iaculis quis 
            elementum dui. 
            Pellentesque semper lobortis mi, nec vulputate nibh molestie vitae.
            </Typography>
        </div>
    );
}

export default About;