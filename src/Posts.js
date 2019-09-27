import React from 'react';
import {Card, CardActions, CardMedia, CardContent, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const posts = [
    {
        title: "one",
        text: "september",
        image: "https://cdn.pixabay.com/photo/2019/09/15/20/26/autumn-4479342_960_720.jpg",
        id: 1
    },
    {
        title: "two",
        text: "october",
        image: "https://cdn.pixabay.com/photo/2018/10/22/19/19/foliage-3766097_960_720.jpg",
        id: 2
    },
    {
        title: "three",
        text: "november",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5S7ZQ-ihFIF_XF1oVq5eBQIc1xkSKguOjD2rYoKrVdnjwJTb",
        id: 3
    },
    {
        title: "four",
        text: "december",
        image: "data:image/jpeg;base64,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",
        id: 4
    },
    {
        title: "five",
        text: "Lomaaaaaa!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3YjmfhS4CxuJ7FB6h6VJhZAiDJZ2W9467Gg8_UfJMpaceOesoA",
        id: 5
    },
]

const Posts =() => {
    
    return (
        <div style={{marginTop:150, padding:50}}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                {posts.map(postitem => (
                    <Grid item ms={12} md={4}>
                        <Card key={postitem.id}>
                            <CardMedia
                                component="img"
                                title={postitem.title}
                                height="250"
                                image={postitem.image}
                            />
                            <CardContent>
                                <Typography component="h3">{postitem.text}</Typography>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>

                ))}
            </Grid>
        </div>
    )
}
export default Posts;