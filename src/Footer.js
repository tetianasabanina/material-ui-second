import React from 'react';
import Grid from '@material-ui/core/Grid';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';

import Form from "./Form";
import { makeStyles } from '@material-ui/styles';

const links = [
    {id: 1,
    url: "https://www.cp.pt/passageiros/pt",
    text: "Trains Portugal"
    },
    {id: 2,
    url: "https://www.rede-expressos.pt/en",
    text: "Buses Portugal"
    }
    ,
    {id: 3,
    url: "https://www.flytap.com",
    text: "TAP AirPortigal"
    }
]

const useStyles = makeStyles({
    root: {
       margin: "20px"
        },
    
    linklist: {
        padding: "20px",
        background: "#E3E4B7",
        borderRadius: "5px"
    }
  });

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={2}>
                <Grid item xs={12} sm={6} >
                    <div className={classes.linklist}>
                    <Typography variant="h6" color="primary">Some helpful links:</Typography>
                    <List >
                        {links.map(linkitem => (
                            <ListItem key={linkitem.id}>
                                <ListItemText>
                                    <Typography >
                                        <Link href={linkitem.url} target="_blank" rel="noopener">
                                            {linkitem.text}
                                        </Link>
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        ))}

                    </List>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Form/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;