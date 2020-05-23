import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import { InputBase } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  wrapper: {
    background: '#f7f7f7',
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
    margin:'5px',
    boxShadow: '1px .5px 4px '
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

const Header = ({ singlePage, handleSearchWord, searchButtonClicked,value }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={"Home"} onClick={()=><Redirect push to='/articles' />}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
      </List>
    </div>
  );

  const single = singlePage;
  const values = value;
  return (
    <div>
      {single ?
        <React.Fragment>
          <AppBar color='inherit' position="static">
            <Toolbar>
              <React.Fragment>
                <IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu" >
                  <MenuIcon />
                </IconButton>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                  {list('left')}
                </Drawer>
              </React.Fragment>
            </Toolbar>
          </AppBar>
          {/* Search Page */}
          <Paper className={classes.wrapper} square={true} elevation={0}>
            <Typography color='primary' variant="h4" component="h2">
              How can we help you?
                         </Typography>
            <div style={{ width: '100%', marginTop: '20px' }}>
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
        </React.Fragment>
        : 
        <React.Fragment>
          <AppBar color='inherit' position="static">
            <Toolbar>
              <React.Fragment>
                <IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu" >
                  <MenuIcon />
                </IconButton>
                <div style={{ width: '100%' }}>
                  <InputBase
                    value={values}
                    onChange={handleSearchWord}
                    className={classes.input}
                    inputProps={{ 'aria-label': 'id no.', className: classes.inputField }}
                    placeholder="Search" />
                  <IconButton className={classes.iconButton} aria-label="search" onClick={searchButtonClicked}>
                    <SearchIcon />
                  </IconButton>
                </div>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                  {list('left')}
                </Drawer>
              </React.Fragment>
            </Toolbar>
          </AppBar>
        </React.Fragment>}
    </div>
  )
}

export default Header;