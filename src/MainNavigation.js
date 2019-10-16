import React from 'react';
import {List, ListItem, ListItemText, Button} from '@material-ui/core';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  list: {
    display: "flex",

  }, 

  listitem: {
   display: "inline-block",
   width: 150,
   textAlign: "right",
   
  },
  link: {
    textDecoration: "none",
    color: "#EBCF12",
  },
  button: {
    backgroundColor: "#9c5ba4"
  }
  
});

const listitems = [
  {
      text: "HOME",
      link: "/",
      listId: 1, 
      buttoncolor: "primary",
  },
  
  {
      text: "ABOUT",
      link: "/about",
      listId: 2,
      
  },
  {
      text: "CONTACT",
      link: "/contact",
      listId: 3,
      
      
  },
  
]

  const MainNavigation =() => {
    const classes = useStyles();
    return (
        <div>
           
            <List component="nav" className={classes.list}>
              {listitems.map(item =>(
                <ListItem className={classes.listitem} key={item.listId}>
                    <ListItemText>
                      <Button variant="contained" color={item.buttoncolor} className={classes.button}>
                      <Link to={item.link} className={classes.link}>
                         {item.text}
                      </Link>
                      </Button>
                    </ListItemText>
                </ListItem>
              ))}
            </List>
            
        </div>
    )
}
export default MainNavigation;