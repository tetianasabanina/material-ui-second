import React from 'react';
import {Card, CardActions, CardMedia, CardContent, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      padding: "20px 0 20px 0",
      height: "100%",
      color: "#305792",
      margin: "20px"
    },
    
  });

const posts = [
    {
        title: "September",
        text: "September...",
        image: "https://cdn.pixabay.com/photo/2019/09/15/20/26/autumn-4479342_960_720.jpg",
        id: 1,
        url: 'https://www.w3schools.com/'
    },
    {
        title: "October",
        text: "October...",
        image: "https://cdn.pixabay.com/photo/2018/10/22/19/19/foliage-3766097_960_720.jpg",
        id: 2,
        url: 'https://www.w3schools.com/'
    },
    {
        title: "November",
        text: "November...",
        image: "https://cdn.pixabay.com/photo/2018/12/04/15/37/autumn-3855864_960_720.jpg",
        id: 3,
        url: 'https://www.w3schools.com/'
    },
    {
        title: "December",
        text: "December...",
        image: "https://cdn.pixabay.com/photo/2018/05/21/17/18/snow-3418819_960_720.jpg",
        id: 4,
        url: 'https://www.w3schools.com/'
    },
    {
        title: "January",
        text: "Lomaaaaaa!",
        image: "https://cdn.pixabay.com/photo/2019/08/02/12/52/carvoeiro-4379670_960_720.jpg",
        id: 5,
        url: 'https://www.w3schools.com/'
    },
]

const Posts =() => {
    // console.log(posts);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
                {posts.map(postitem => (
                    
                    <Grid item xs={12} sm={6} md={4} key={postitem.id}>
                        <Card >
                            <CardMedia
                                component="img"
                                title={postitem.title}
                                height="250"
                                image={postitem.image}
                            />
                            <CardContent>
                                <Typography>{postitem.title}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" color="primary" href={postitem.url}>Read more</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                ))}
            </Grid>
        </div>
    )
}
export default Posts;