import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DescriptionIcon from '@material-ui/icons/Description';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        width: '50%',
        // background:'red',
        flexDirection: 'column',
        margin: '10px auto 10px auto'
    },
}));


const ListData = ({keywords, results, detailsPageClicked, answers}) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper} >
            <Typography style={{ margin: '10px' }} align="left" variant="body2" component="h2">
                    Search results for " {keywords} "
            </Typography>
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
                                {/* <ListItemText>{result}</ListItemText> */}
                                <ListItemText primary={result} secondary={answers[index].substring(0,150)+'..'} />
                            </ListItem>
                            <Divider variant="inset" component="li" /> 
                        </div>
                        )
                })}
            </List>
        </div>
    )
}

export default ListData;