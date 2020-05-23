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

const Details = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.wrapper} variant="outlined" square >
            <Typography style={{ margin: '10px' }} align="left" variant="h2" component="h2">
                h1. Heading
            </Typography>
            <Divider variant="fullWidth" component="li" />
            <Typography style={{ margin: '10px' }} align="left" variant="body2" component="h2">
                We're kicking off a new video series focusing on core Optimize features, specifically on how to create a test in less than five minutes.

                Our first video – How to create a new experiment in Optimize– explains how to create a new A/B test in three steps. First we show you how to create a variant using the Optimize visual editor. Then we target website visitors from a specific city, and finally we use one of the built-in Google Analytics goals as an objective and start our test.

                Learn more about how to create an A/B test and the different experiment types (like redirect and MVT) supported by Optimize.

                – Happy Optimizing!
                We're kicking off a new video series focusing on core Optimize features, specifically on how to create a test in less than five minutes. Our first video – How to create a new experiment in Optimize– explains how to create a new A/B test in three steps. First we show you how to create a variant using the Optimize visual editor. Then we target website visitors from a specific city, and finally we use one of the built-in Google Analytics goals as an objective and start our test. Learn more about how to create an A/B test and the different experiment types (like redirect and MVT) supported by Optimize. – Happy Optimizing!
            </Typography>
        </Paper>
    )
}

export default Details;