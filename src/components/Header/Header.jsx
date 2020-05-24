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
import { InputBase } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  wrapper: {
    margin: '10px',
    background: '#f7f7f7',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    background: 'white',
    height: '45px',
    width: '75%',
    margin: '7px',
    borderRadius: '7px',
    paddingLeft: '40px',
    boxShadow: '1px .5px 4px '
  },
  inputField: {
    paddingLeft: theme.spacing(1),
    fontSize: '.9rem',
  },
  iconButton: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(0.5),
  },

  leftIcon: {
    width: '1px',
    display: 'relative',
    right: '-40px',
    top: '1px',
    zIndex: '1'
  },
  rightIcon: {
    width: '1px',
    display: 'relative',
    left: '-40px',
    top: '1px',
    zIndex: '2'
  }
}));

const Header = ({ handleKeyPress, homeButton, singlePage, handleSearchWord, searchButtonClicked, value }) => {
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
        <ListItem button key={"Home"} onClick={homeButton}>
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

          <div className={classes.wrapper}>
          <Grid container justify='center'>
            <Grid item md={9} xs={12}>
              <Typography style={{ marginBottom: '20px'}} color='primary' variant="h6" component="h2">
                How can we help you?
            </Typography>
            </Grid>
            <Grid item md={9} xs={12}>
              <div style={{ }} >
                <IconButton className={classes.leftIcon} aria-label="search" onClick={searchButtonClicked}>
                  <SearchIcon />
                </IconButton>
                <InputBase
                  onKeyPress={handleKeyPress}
                  onChange={handleSearchWord}
                  className={classes.input}
                  inputProps={{ 'aria-label': 'id no.', className: classes.inputField }}
                  placeholder="Describe your issue.." />
                <IconButton disabled className={classes.rightIcon} aria-label="search" >
                  {values ? <ClearIcon /> : ''}
                </IconButton>
              </div>
            </Grid>
          </Grid>
          </div>
        </React.Fragment>
        :
        <React.Fragment>
          <AppBar color='inherit' position="static">
            <Toolbar>
              <Grid container justify='flex-start'>
                <Grid item md={1} xs={1}>
                  <IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu" >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item md={8} xs={11}>
                  <IconButton className={classes.leftIcon} aria-label="search" onClick={searchButtonClicked}>
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    onKeyPress={handleKeyPress}
                    value={values}
                    onChange={handleSearchWord}
                    className={classes.input}
                    inputProps={{ 'aria-label': 'id no.', className: classes.inputField }}
                    placeholder="Describe your issue.." />
                  <IconButton disabled className={classes.rightIcon} aria-label="search">
                    {values ? <ClearIcon /> : ''}
                  </IconButton>
                </Grid>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                  {list('left')}
                </Drawer>
              </Grid>
            </Toolbar>
          </AppBar>
        </React.Fragment>}
    </div>
  )
}

export default Header;