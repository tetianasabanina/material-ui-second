import React from 'react';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";


import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  listitem: {
   display: "inline-block",
   width: 150,
   textAlign: "right",
   color: "#305792",
  },
  link: {
    textDecoration: "none",
  },
   linktext: {
    padding: "5px",
    border: "1px", 
    borderStyle: "solid",
    borderRadius: "5px",
    textAlign: "center"
  }
});

const listitems = [
  {
      text: "HOME",
      link: "/",
      listId: 1
  },
  {
    text: "POSTS",
    link: "/posts",
    listId: 4
},
  {
      text: "ABOUT",
      link: "/about",
      listId: 2
  },
  {
      text: "CONTACT",
      link: "/contact",
      listId: 3
  }
]

  const MainNavigation =() => {
    const classes = useStyles();
    return (
        <div>
           
            <List component="nav">
              {listitems.map(item =>(
                <ListItem className={classes.listitem} key={item.listId}>
                    <ListItemText>
                      <Link to={item.link} className={classes.link}>
                        <Typography className={classes.linktext}> {item.text}</Typography>
                      </Link>
                    </ListItemText>
                </ListItem>
              ))}
            </List>
            
        </div>
    )
}
export default MainNavigation;