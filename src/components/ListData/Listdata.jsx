import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DescriptionIcon from '@material-ui/icons/Description';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";


const ListData = ({keywords, results, detailsPageClicked, answers}) => {
    return (
        <Grid container spacing={2} justify="center">
            <Grid item lg={8} xs={11}>
                <Typography style={{ marginTop: '20px' }} align="left" variant="body2" component="h2">
                        Search results for " {keywords} "
                </Typography>
            </Grid>
            <Grid item lg={8} xs={11}>
            <List>
                {results.map((result,index) => {
                    return (
                        <div key={index} onClick={()=>detailsPageClicked(results[index],answers[index])}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <DescriptionIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={result} secondary={answers[index].substring(0,150)+'..'} />
                            </ListItem>
                            <Divider variant="inset" component="li" /> 
                        </div>
                        )
                })}
            </List>
            </Grid>
        </Grid>
    )
}

export default ListData;