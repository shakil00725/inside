import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";

const Details = ({ question, answer }) => {
    return (
        <Grid style={{ background:'white', height:'100vh'}} container justify="center">
            <Grid item md={9} xs={11}>
                <Paper style={{ marginTop: '20px' }}variant="outlined" elevation={3}>
                    <Typography style={{ margin: '10px', fontSize:'1.5rem' }} align="left" variant="h1" component="h2">
                        {question}
                    </Typography>
                    <Divider variant="fullWidth" component="nav" />
                    <pre style={{ margin:'10px', textAlign:'left', fontSize:'1.2rem'}}>{answer}</pre>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Details;