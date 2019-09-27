import React from 'react';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  listitem: {
   display: "inline-block",
   width: 150,
   textAlign: "right",
   color: "#305792",
  }
});

const listitems = [
    {
        text: "home",
        id: 1
    },
    {
        text: "second link",
        id: 2
    },
    {
        text: "third link",
        id: 3
    }
]

const MainNavigation =() => {
    const classes = useStyles();
    return (
        <div>
            <List component="nav">
                {listitems.map(item =>(
                <ListItem className={classes.listitem} key={item.id}>
                    <ListItemText>
                        <Typography>
                            {item.text}
                        </Typography>
                    </ListItemText>
                </ListItem>
                ))}
                
            </List>
        </div>
    )
}
export default MainNavigation;