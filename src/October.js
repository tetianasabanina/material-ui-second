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
  paragraph: {
    marginTop: "30px"
  }
  
});
const October =() => {
    const classes = useStyles();
    return (
        <div className={classes.page} >
            <Typography variant="h2">October</Typography>
            <Typography variant="subtitle1" className={classes.paragraph}>
              Nulla dignissim ultrices lacinia. 
              Etiam commodo venenatis nisl, ut rutrum ligula aliquet eu. 
              Pellentesque nec velit non est cursus efficitur. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
              per inceptos himenaeos. Phasellus imperdiet urna id turpis elementum, 
              vitae imperdiet lorem lobortis. Ut commodo arcu eu enim mollis facilisis. 
              Ut non fringilla nisi. Donec a consequat justo, sit amet fringilla lectus. 
              Donec aliquam ex sit amet orci egestas convallis. 
              Maecenas lobortis tincidunt finibus. Etiam eu justo justo. 
              Cras non turpis eget ex scelerisque tempus non sit amet ex. 
              Nulla scelerisque tempus nisi sed efficitur.
              Phasellus placerat dictum euismod.
            </Typography>
        </div>
    );
}

export default October;