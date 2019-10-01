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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
       margin: "10px"
        },
    form: {
        display: 'flex',
        flexDirection: 'column',
        background: "lightBlue",
        borderRadius: "0 0 5px 5px"
    },
  });

const Form = () => {
    const classes = useStyles();
    return (
        <ExpansionPanel >
           
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{background: "lightBlue"}}
        >
        
        <Typography>
            Form:
        </Typography>
        
            
        
        </ExpansionPanelSummary>
       
        <ExpansionPanelDetails className={classes.form}>
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
        
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
}

export default Form;