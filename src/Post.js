import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

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
const Post =({ match, data }) => {
    const classes = useStyles();
    let post = data.find(p=> p.id == match.params.postId);
    return (
        <div className={classes.page} >
            <Typography variant="caption">POST #{post.id}</Typography>
            <Typography variant="h2">{post.title}</Typography>
            <Typography variant="subtitle1" className={classes.paragraph}>
                {post.text}
            </Typography>
            <Button>Back</Button>
        </div>
    );
}

export default Post;