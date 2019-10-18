import React from 'react';
import {Card, CardActions, CardMedia, CardContent, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import postdata from "./postdata";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      padding: "20px 0 20px 0",
      height: "100%",
      color: "#305792",
      margin: "90px 20px 20px"
    },
    link: {
        textDecoration: "none",
    }
    
  });

const Posts =({match}) => {
    // console.log(match);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
                {postdata.map(postitem => (
                    
                    <Grid item xs={12} sm={6} md={4} key={postitem.id}>
                        <Card >
                            <CardMedia
                                component="img"
                                title={postitem.title}
                                height="250"
                                image={postitem.image}
                            />
                            <CardContent>
                                <Typography variant="h5">{postitem.title}</Typography>
                                
                            </CardContent>
                            <CardActions>

                            <Button variant="outlined" >
                                <Link to={`${postitem.id}`} className={classes.link}>
                                    Read more
                                </Link>
                            </Button>
                            <Button disabled>
                                Contact
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    
                ))}
            </Grid>
            
                                
           
        </div>
    )
}
export default Posts;