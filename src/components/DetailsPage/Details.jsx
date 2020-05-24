import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";

const Details = ({ question, answer }) => {
    return (
        <Grid container justify="center">
            <Grid item lg={8} xs={11}>
                <Paper style={{ marginTop: '20px' }}variant="outlined" elevation={3}>
                    <Typography style={{ margin: '10px' }} align="left" variant="h6" component="h2">
                        {question}
                    </Typography>
                    <Divider variant="fullWidth" component="nav" />
                    <Typography style={{ margin: '10px' }} align="left" variant="body2" component="h2">
                        {answer}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Details;