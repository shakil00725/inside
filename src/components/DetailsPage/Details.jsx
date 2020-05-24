import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '60%',
        margin: '10px auto'
    }
}));

const Details = ({question,answer}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.wrapper} variant="outlined"  elevation={3}>
            <Typography style={{ margin: '10px' }} align="left" variant="h6" component="h2">
                {question}
            </Typography>
            <Divider variant="fullWidth" component="nav" />
            <Typography style={{ margin: '10px' }} align="left" variant="body2" component="h2">
                {answer}
            </Typography>
        </Paper>
    )
}

export default Details;