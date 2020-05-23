import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { InputBase } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        background:'#f7f7f7',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(3),
        background: 'white',
        height: '50px',
        width: '50%',
        borderRadius: '5px',
        boxShadow: 'inset 0 0 4px #000000',
    },
    inputField: {
        paddingLeft: theme.spacing(2),
        fontSize: '1rem',
    },
    iconButton: {
        padding: theme.spacing(1),
        marginLeft: theme.spacing(0.5),
    },
}));

const Searchbar = ({handleSearchWord,searchButtonClicked}) => {

    const classes = useStyles();
    return (
        <Paper className={classes.wrapper} square={true} elevation={0}>
            <Typography color='primary' variant="h4" component="h2">
                How can we help you?
            </Typography>
            <div style={{ width: '100%', marginTop:'20px' }}>
                <InputBase
                    onChange={handleSearchWord}
                    className={classes.input}
                    inputProps={{ 'aria-label': 'id no.', className: classes.inputField }}
                    placeholder="Search" />
                <IconButton className={classes.iconButton} aria-label="search" onClick={searchButtonClicked}>
                    <SearchIcon />
                </IconButton>
            </div>
        </Paper>
    )
}

export default Searchbar;