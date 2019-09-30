import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';


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
    text: "Portugues Airlains"
    }
]

const useStyles = makeStyles({
    root: {
       padding: "50",
       margin: "50"
        },
    form1: {
        display: 'flex',
        flexDirection: 'column',
        background: "lightBlue",
        padding: "20px",
        borderRadius: "5px"
        },
    linklist: {
        padding: "20",
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
                spacing={3}>
                <Grid item xs={12} sm={6} padding="20">
                    <Typography variant="h6" color="primary">Some helpful links:</Typography>
                    <List className={classes.linklist}>
                        {links.map(linkitem => (
                            <ListItem key={linkitem.id}>
                                <ListItemText>
                                    <Typography >
                                        <Link href={linkitem.url} >
                                            {linkitem.text}
                                        </Link>
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        ))}

                    </List>
                </Grid>
                <Grid item xs={12} sm={6} padding="20">

                    <form className={classes.form1} >
                        <TextField label="First Name" fullWidth margin="dense" variant="outlined" />
                        <TextField label="Last Name" disabled margin="dense" />
                        <TextField label="Email" type="email" margin="dense" error />
                        <TextField label="Phone" type="phone" margin="dense" />
                        <TextField label="Password" type="password" margin="dense" />

                        <FormControl >
                            <FormLabel component="legend">Radio-button</FormLabel>
                            <RadioGroup aria-label="travel" name="travel1" >
                                <FormControlLabel value="traveller" control={<Radio />} label="Traveller" />
                                <FormControlLabel value="turist" control={<Radio />} label="Turist" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl>
                            <FormLabel component="legend">Select:</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox value="in" />}
                                    label="I am in for this trip!"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="wait" />}
                                    label="I am always in"
                                />

                            </FormGroup>
                        </FormControl>
                        <Button variant="contained" color="primary" size="medium">
                            Send
                </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;